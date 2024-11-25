package org.example.config;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.cloud.client.ServiceInstance;
import org.springframework.cloud.client.loadbalancer.Request;
import org.springframework.cloud.client.loadbalancer.Response;
import org.springframework.cloud.client.loadbalancer.DefaultResponse;
import org.springframework.cloud.loadbalancer.core.ReactorServiceInstanceLoadBalancer;
import org.springframework.cloud.loadbalancer.core.ServiceInstanceListSupplier;
import reactor.core.publisher.Mono;

public class CustomLoadBalancer implements ReactorServiceInstanceLoadBalancer {

    private final String serviceId;
    private final ServiceInstanceListSupplier supplier;

    public CustomLoadBalancer(String serviceId, ObjectProvider<ServiceInstanceListSupplier> serviceInstanceListSupplierProvider) {
        this.serviceId = serviceId;
        this.supplier = (ServiceInstanceListSupplier) serviceInstanceListSupplierProvider;
    }

    @Override
    public Mono<Response<ServiceInstance>> choose(Request request) {
        // 获取服务实例列表
        return supplier.get().next().map(instances -> {
            // 自定义选择逻辑，例如选择第一个实例
            if (instances.isEmpty()) {
                return new DefaultResponse(null);
            }
            // 示例：随机选择服务实例
            ServiceInstance instance = instances.get((int) (Math.random() * instances.size()));
            return new DefaultResponse(instance);
        });
    }
}
