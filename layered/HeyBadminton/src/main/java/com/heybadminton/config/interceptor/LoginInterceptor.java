package com.heybadminton.config.interceptor;

import com.alibaba.fastjson.JSON;
import com.heybadminton.constant.ErrorCode;
import com.heybadminton.pojo.ResponseResult;
import com.heybadminton.pojo.UserVO;
import com.heybadminton.service.UserService;
import com.heybadminton.utils.UserThreadLocal;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
@Slf4j
public class LoginInterceptor implements HandlerInterceptor {

    @Autowired
    private UserService userService;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        /**
         * 在执行 Controller方法（Handler）之前进行
         * 1、需要判断，请求的接口路径是否为 HandlerMethod（Controller方法）
         * 2、判断 Token 是否为空，如果为空，即为未登录
         * 3、如果 Token 不为空，进行登录验证 checkToken
         * 4、如果认证成功，放行即可
         */
        if (!(handler instanceof HandlerMethod)) {
            /**
             * handler 可能是 RequestResourceHandler，Springboot 程序访问静态资源，默认去 classpath 下的 static 目录查询
             */
            return true;
        }
        String token = request.getHeader("Authorization");

        log.info("=================request start===========================");
        String requestURI = request.getRequestURI();
        log.info("request uri:{}", requestURI);
        log.info("request method:{}", request.getMethod());
        log.info("token:{}", token);
        log.info("=================request end===========================");

        if (StringUtils.isBlank(token)) {
            ResponseResult result = ResponseResult.fail(ErrorCode.NO_LOGIN.getCode(), "未登录");
            response.setContentType("application/json;charset=utf-8");
            response.getWriter().print(JSON.toJSONString(result));
            return false;
        }

        ResponseResult res = userService.findUserInfoByToken(token);
        if (!res.isSuccess()) {
            response.setContentType("application/json;charset=utf-8");
            response.getWriter().print(JSON.toJSONString(res));
            return false;
        }
        /**
         * 登录成功，放行
         * 在 Controller 中，直接获取登录信息
         */
        UserVO user = (UserVO) res.getData();
        UserThreadLocal.put(user);
        return true;
    }


    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
        /**
         * 如果不删除，ThreadLocal 中用完的信息，有内存泄漏的风险
         */
        UserThreadLocal.remove();
    }
}
