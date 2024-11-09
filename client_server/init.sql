-- Drop database if it exists
DROP DATABASE IF EXISTS heybadminton;

-- Create database
CREATE DATABASE heybadminton;

-- Use the heybadminton database
USE heybadminton;

-- Create table sys_user
CREATE TABLE sys_user (
    id INT AUTO_INCREMENT PRIMARY KEY,
	profile VARCHAR(255),
    username VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
	introduction TEXT,
    is_admin BOOLEAN DEFAULT false
);

INSERT INTO sys_user (profile, username, email, password, is_admin)
VALUES
	('/upload_images/cat1-1681697583033.jpg', 'root', 'root@gmail.com', 'root', true),
	('/upload_images/cat2-1681726655723.jpg', 'user1', 'user1@gmail.com', 'user1', false),
	('/upload_images/cat3-1681695365623.jpg', 'user2', 'user2@gmail.com', 'user2', false);

-- Create table tournament
CREATE TABLE tournament (
    id INT AUTO_INCREMENT PRIMARY KEY,
    header_url VARCHAR(255),
    title VARCHAR(255),
    detail TEXT,
    location VARCHAR(255),
    date VARCHAR(255),
    register_link VARCHAR(255),
    carouse_image_url VARCHAR(255),
    create_time DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO tournament (header_url, title, detail, location, date, register_link, carouse_image_url)
VALUES 
    (
        'https://bwfworldchampionships.bwfbadminton.com/wp-content/plugins/bwf-menu-system/images/logo-wch-mobile-09.png', 
        'BWF World Championships', 
        'The BWF World Championships is the most prestigious tournament in badminton, featuring the world''s best players competing for the title of world champion in five disciplines.', 
        'Tokyo, Japan', 
        'August 21-27, 2023', 
        'https://development.bwfbadminton.com/', 
        'https://bwfworldchampionships.bwfbadminton.com/wp-content/uploads/sites/8/2022/09/WC2023_Digital_WC-Site_1024x481_3.jpg'
    ),
    (
        'https://www.allenglandbadminton.com/wp-content/uploads/2021/09/All-England-Badminton.png', 
        'YONEX All England Open', 
        'The YONEX All England Open is one of the oldest and most prestigious badminton tournaments in the world, part of the BWF World Tour, and considered one of the five most prestigious events in the tour.', 
        'Birmingham, England', 
        'March 14-19, 2023', 
        'https://www.allenglandbadminton.com/', 
        'https://bwfworldtour.bwfbadminton.com/wp-content/uploads/sites/11/2019/11/wt_banner_oct2019.jpg'
    ),
    (
        'https://extranet.bwf.sport/docs/events/4708/logo-colour/TotalEnergies_BWF_Sudirman%20Cup_2023.svg', 
        'TOTAL BWF Sudirman Cup', 
        'The TOTAL BWF Sudirman Cup is a mixed team badminton championship held every two years. It features teams from different countries competing in a knockout format tournament, named after Dick Sudirman, a former Indonesian badminton player and coach.', 
        'Suzhou, China', 
        'May 14-21, 2023', 
        'https://bwfsudirmancup.bwfbadminton.com/', 
        'https://www.badmintoneurope.tv/image/800/450/bb063c4b-886e-4e98-8ded-eaa104b803d6.png'
    );

-- Create table equipment
CREATE TABLE equipment (
	id INT AUTO_INCREMENT PRIMARY KEY,
	post_user_id INT,
	avatar_url VARCHAR(255),
	title VARCHAR(255),
	content TEXT,
	pictures_urls TEXT,
	is_delete BOOLEAN DEFAULT false,
	create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	update_time TIMESTAMP
);

INSERT INTO equipment (title, content, avatar_url, pictures_urls)
VALUES
    ('Badminton Racket Selection Tips', 'Choosing the right badminton racket can make a big difference in your game. In this post, we''ll discuss some key factors to consider when selecting a racket, such as weight, balance, and string tension. We''ll also provide recommendations for rackets that are suitable for players of different levels and playing styles.', '/upload_images/cat1-1681697583033.jpg', '/upload_images/equip1.jpg'),
    ('Mastering the Badminton Serve', 'The serve is one of the most important shots in badminton, as it sets the tone for the rest of the rally. In this post, we''ll provide tips and techniques for improving your serve, such as varying the placement and speed of your serves, and faking your opponent out with a deceptive serve. We''ll also share some drills to help you practice your serves.', '/upload_images/cat2-1681726655723.jpg', '/upload_images/equip2.jpg'),
    ('Badminton Footwork Basics', 'Good footwork is essential for success in badminton, as it allows you to move quickly and efficiently around the court. In this post, we''ll cover some basic footwork patterns and techniques, such as the split-step, the side shuffle, and the lunge. We''ll also provide drills to help you improve your footwork.', '/upload_images/cat3-1681695365623.jpg', '/upload_images/equip3.jpg'),
    ('The Mental Game of Badminton', 'While physical ability is important in badminton, the mental game is equally crucial. In this post, we''ll discuss some strategies for staying focused and motivated on the court, such as setting goals, using positive self-talk, and visualizing success. We''ll also provide tips for dealing with nerves and pressure during matches.', NULL, NULL),
    ('Best Badminton Shoes for Beginners', 'If you''re new to badminton, choosing the right pair of shoes is essential to ensure you''re comfortable and safe on the court. When shopping for badminton shoes, look for ones that are lightweight, flexible, and offer good support. Some of the top options for beginners include Yonex SHB-01LX, Asics Gel-Rocket 9, and Adidas Performance Barricade Club. Make sure to try on a few pairs before making your final decision!', NULL, NULL),
    ('How to Improve Your Badminton Game', 'Improving your badminton game requires practice, dedication, and a solid understanding of the game. Start by perfecting your basic shots, such as the clear, drop shot, and smash. Work on your footwork and agility by practicing drills and exercises. Additionally, consider taking lessons or joining a badminton club to learn from more experienced players. Don''t forget to stay hydrated and warm up properly before playing to prevent injury.', NULL, NULL),
    ('Badminton Etiquette: Dos and Don''ts', 'When playing badminton, it''s important to follow proper etiquette to ensure a safe and enjoyable experience for everyone. Do arrive on time and be ready to play when it''s your turn. Don''t talk or make noise when someone is about to serve. Do apologize if you accidentally hit your opponent. Don''t argue with the referee or other players. And always remember to shake hands and say ''good game'' at the end of the match.', NULL, NULL),
    ('Tips for Playing Better Doubles', 'Playing doubles in badminton can be a lot of fun, but it can also be challenging. Here are some tips to help you play better doubles:\n\n1. Communication is key. Make sure you and your partner are communicating effectively during the game.\n2. Stay in your position. One player should cover the front of the court while the other covers the back.\n3. Be aggressive. Don''t be afraid to take risks and go for the kill shot when the opportunity arises.\n4. Watch your opponent. Keep an eye on your opponents'' movements and anticipate their shots.\n5. Stay focused. Don''t let mistakes or bad shots get you down. Stay focused and keep playing your best.', NULL, NULL),
    ('The Health Benefits of Playing Badminton', 'Playing badminton is not only fun, but it''s also good for your health! Here are some of the health benefits of playing badminton:\n\n1. Improves cardiovascular health. Badminton is a great way to get your heart rate up and improve your cardiovascular health.\n2. Increases agility and coordination. The fast-paced nature of badminton can improve your agility and coordination.\n3. Burns calories. Playing badminton can burn a lot of calories and help you maintain a healthy weight.\n4. Improves mental health. Exercise is great for improving mental health, and badminton is no exception.\n5. Builds muscle. Badminton can help build muscle in your legs, arms, and core.\n\nSo, next time you''re looking for a fun way to stay active, grab a badminton racket and head to the court!', NULL, NULL),
    ('Common Mistakes to Avoid in Badminton', 'Badminton is a game that requires skill and strategy. However, even the best players can make mistakes. Here are some common mistakes to avoid in badminton:\n\n1. Hitting the shuttle too hard. Many players make the mistake of trying to hit the shuttle too hard, which can result in it going out of bounds.\n2. Not moving your feet. It''s important to move your feet and get into position to hit the shuttle, rather than reaching for it.\n3. Not watching the shuttle. Keep your eyes on the shuttle at all times, so you can anticipate its movements.\n4. Playing the same shot repeatedly. Don''t be predictable. Mix up your shots to keep your opponent guessing.\n5. Not practicing enough. Practice makes perfect, so make sure you''re putting in enough time on the court to improve your skills.', NULL, NULL),
    ('The History of Badminton', 'Badminton has a rich history that dates back over 2,000 years. The game originated in India and was originally called ''Poona''. It was played using a feathered shuttlecock and a racket made of wood. The game eventually made its way to England, where it gained popularity in the 1800s.\n\nIn 1934, the International Badminton Federation (IBF) was established, and the first world championships were held in 1977. Today, badminton is played all over the world and is an Olympic sport.\n\nSo, the next time you step onto the badminton court, remember that you''re part of a long and rich history of players who have enjoyed this game for centuries.', NULL, NULL);

-- Create table comment
CREATE TABLE comment (
    id INT AUTO_INCREMENT PRIMARY KEY,
    post_id INT,
    comment_user_id INT,
    content TEXT,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_delete BOOLEAN DEFAULT false,
    post_user_profile VARCHAR(255)
);

INSERT INTO comment (post_id, content, post_user_profile)
VALUES 
  	(1, 'Wonderful Post!', '/upload_images/cat1-1681697583033.jpg'),
  	(1, 'Thank you for your advice.', '/upload_images/cat2-1681726655723.jpg');

-- Create table match
CREATE TABLE `match` (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    time VARCHAR(255),
    date VARCHAR(255),
    location VARCHAR(255),
    post_user_id INT,
    note TEXT,
    participants INT,
    max_participants INT,
    closed BOOLEAN DEFAULT false,
    create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_delete BOOLEAN DEFAULT false
);

INSERT INTO `match` (title, time, date, location, participants, max_participants, note)
VALUES
    ('Amateur Badminton Tournament', '10:00am', '2023-04-21', 'Boston Badminton, Westborough, MA', 14, 16, 'Come join us for our first amateur badminton tournament at The Courtside Club in Westborough, MA on April 21st at 1:00pm. Put your skills to the test, meet new players, and have a chance to win prizes!'),
    ('Weekend Badminton Social', '1:00pm', '2023-05-13', 'Atlanta Badminton Club, Norcross, GA', 8, 10, 'Join us for a fun and social badminton morning at the Atlanta Badminton Club in Norcross, GA on May 13th at 10:00am. We\'ll be playing doubles matches and enjoying some snacks and refreshments afterwards. All skill levels welcome!'),
    ('Beginner\'s Badminton Workshop', '7:00pm', '2023-06-01', 'Badminton Alley, El Monte, CA', 10, 12, 'Learn the basics of badminton and improve your game at our beginner\'s workshop at Badminton Alley in El Monte, CA on June 1st at 7:00pm. Our experienced coaches will guide you through the fundamentals of badminton, from grip and footwork to serves and clears. Rackets provided.');

