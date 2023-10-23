import { createContext, useState } from "react";

export const bucket = createContext();
export default function StoreCompo(props) {

    const [data, setData] = useState([

        {
            id: 1,
            cat: 'bollywood',
            clap: "12k",
            date: "14-10-23",
            title: "EXCLUSIVE: Deepika Padukone Ranveer Singh Wedding: Bengaluru reception date and venue REVEALED",
            desc: "After months of speculations, Deepika Padukone and Ranveer Singh finally announced on Sunday that they will get married on November 14 and 15. The couple will get married at Lake Como in Italy in two separate wedding ceremonies- one following the South Indian customs and the other Sindhi. They will host a wedding party in Italy on November 15, 2018. Ranveer Singh and Deepika Padukone will leave for Italy on November 10, 2018. The couple who has been dating for six years will solemnize their relationship in less than a month.Deepika and Ranveer’s wedding will be a private affair but they will be celebrating with their industry friends on December 1, 2018. A grand reception has been planned at the Grand Hyatt in Mumbai. We have learnt EXCLUSIVELY that Deepika and Ranveer will also be hosting another wedding reception in Bengaluru, where her family is based. Deepika Padukone’s parents have invited their close friends and extended family members for the reception in Bengaluru. It will take place on November 21, 2018. The family has booked the ballroom of The Leela Palace Hotel.",
            img: "https://www.pinkvilla.com/images/2022-09/deepika%20padukone%20ranveer%20singh%20reception.jpg",
        },
        {
            id: 2,
            cat: 'bollywood',
            clap: "13k",
            date: "12-10-23",
            title: "EXCLUSIVE: Tara Sutaria signed opposite Shahid Kapoor for the remake of Arjun Reddy",
            desc: "After months of speculations, Deepika Padukone and Ranveer Singh finally announced on Sunday that theAfter speculations about the film’s hero, the makers announced recently that Shahid Kapoor has been signed on to play the titular character in the remake of Arjun Reddy. The plot of the film revolves around a medical student and how he falls for her junior. About the film, a source had earlier informed Mumbai Mirror, “The film is scheduled to go on the floors in July and the team is looking for an actress opposite Shahid at the moment. While the locations are yet to be finalised, the plan is to shoot in India as well as abroad.Tara’s debut film will hit the theatres on November 23, 2018. Even before the release of her first film, Tara has already bagged her second film.Shahid Kapoor shared on his social media page that he is a part of the film by sharing a selfie with producers Murad Khetani, Ashwin Varde and director Sandeep Vanga. He posted, “Team ARJUN REDDY is READY ! Here we go.",
            img: "https://www.pinkvilla.com/images/2022-09/Shahid%20Kapoor%20Tara%20Sutaria.jpg",
        },
        {
            id: 3,
            cat: 'bollywood',
            clap: "14k",
            date: "12-10-23",
            title: "EXCLUSIVE: Disha Patani to star in Bharat with Salman Khan and Priyanka Chopra?",
            desc: "Director Ali Abbas Zafar has managed to pull off a casting coup with his next, Bharat. The film is a remake of the South Korean movie, Ode to my Father. Salman Khan will star in and produce the film. Priyanka Chopra has signed on the dotted line- this will be her next Hindi film after two years.Disha Patani who has delivered a 100 crore hit with Baaghi 2 has been roped in to star in the film. Earlier, Shraddha Kapoor’s name was being considered for the film, as it is a two-heroine project. However, sources confirm that it is Disha who has been signed for the film.Ali Abbas Zafar had told DNA about the film’s plot, “Since the story spans over a period of 70 years, there will be many historical references. It is essentially about a man who lives through several significant moments from India’s past to present. We are currently working on the film’s pre-production and details will be announced once we are in a position to talk about them.”A source had informed DNA, “Salman will sport five different looks in Bharat, which begins with him witnessing one of the most dramatic chapters of our history — the Partition. It’s an Indian adaptation of the Korean movie, Ode to My Father and will be a commercial film with a mix of action, drama and music.”",
            img: "https://www.pinkvilla.com/images/2022-09/Salman%20Khan%20Priyanka%20chopra%20disha%20patani.jpg",
        },
        {
            id: 4,
            cat: 'bollywood',
            clap: "19k",
            date: "12-10-23",
            title: "EXCLUSIVE- Deepika Padukone on Mijwan Fashion show: This is truly a fashion show with a difference",
            desc: "Deepika Padukone and Ranbir Kapoor will turn showstoppers for ace designer Manish Malhotra. They will be walking at the much awaited Mijwan Fashion Show, 2018.Shabana Azmi hosts the show every year with the goal of creating employment opportunities for women and reviving the art of embroidery. Each year, A-list celebs walk the ramp to create awareness about the Mijwan Welfare Foundation, founded by Shabana Azmi’s father Kaifi Azmi. Manish Malhotra will be putting up a spectacular show, ‘The Walk of Mijwan’. This is the 9th annual fundraiser for Mijwan.Deepika shared EXCLUSIVELY with us, “I have walked the ramp many times before, but this is truly a fashion show with a difference because Manish Malhotra bridges the urban - rural divide by taking the traditional craft of chikankari and fashioning it into contemporary silhouettes in his signature style.Mijwan Welfare Societys work over the last 9 years has been instrumental in giving the women and girl children of Mijwan the confidence to negotiate a better future for themselves. Congratulations to Shabanaji and Namrata for carrying forward Kaifi Saheb’s dream and inspiring us to become active participants in the process of change.",
            img: "https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2018/04/04/Pictures/_a4871f74-37ba-11e8-90dd-823da00706aa.JPG",
            

        },
        {
            id: 5,
            cat: 'bollywood',
            clap: "130k",
            date: "12-10-23",
            title: "EXCLUSIVE- Kartik Aaryan: I have always had a crush on Kareena Kapoor Khan",
            desc: "Kareena Kapoor Khan and Kartik Aaryan recently walked the ramp in Singapore for designer Manish Malhotra. Kartik spoke to us about his experience turning showstopper for Manish with Kareena Kapoor.Kareena Kapoor Khan and Kartik Aaryan recently walked the ramp in Singapore for designer Manish Malhotra. The two made for a stunning pair on-stage and carried off their outfits with elan. Kartik and Kareena’s camaraderie made fans go gaga; they even suggested that the two star in a film together.Kartik has delivered a massive hit with Sonu Ke Titu Ki Sweety. The film has grossed over Rs. 100 crores on the box-office. He posted on his social media account, “My first 100 crore film.. dreamt of this day for a long long time and it is all coming true now. Some people were supportive and some people laughed when things were not working out and that’s okay.. the ups, the downs, they are all mine.. they are all a part of my journey and its been a beautiful journey so far.. still a long way to go but I am very excited. Thank you so much for all the love and appreciation. Thank you to my Team and especially my fans, you guys have no idea how much I love all of you.",
            img: "https://www.pinkvilla.com/images/2022-09/Kartik%20Aaryan%20Kareena%20KApoor%20Khan.PNG",
        },
        {
            id: 6,
            cat: 'bollywood',
            clap: "134k",
            date: "12-10-23",
            title: "EXCLUSIVE: Abhishek Kapoor has another fallout - this time with KriArj Entertainment & T-Series",
            desc: "The new age studio, who shares a great equation with T-Series later brought them on board as well to look after other aspects like the music, digital, satellite and cable rights. However, both the studios were wary with Abhishek's interference in their financial decisions and his constant delays in delivering the film .The film was going grossly overbudget as Kapoor's planning was completely unprofessional and disorganized as the entire production was being handled by Kapoor's Guy In the Sky Pictures.Says an inside source , 'KriArj Entertainment and T-Series decided to come onboard since they believed in the film and in Abhishek Kapoor's vision. However, as Kedarnath unfolded several issues pertaining the dates of the talent , prep time and delays in the film's delivery began cropping up. Abhishek replaced several of the crew members and technicians at the very last minute. Despite investing a huge some of funding into the project , Kedarnath was going way overbudget owing to Gattu's constant unreasonable demands . He not only delayed the shoot of the film by six months but also majorly interfered in the film's financial planning and overall business workings. Abhishek also demanded that a higher price be quoted for the music rights and this despite T-Series being music moguls and being the best in the music industry'.",
            img: "https://www.koimoi.com/wp-content/new-galleries/2018/02/abhishek-kapoor-another-fallout-time-kriarj-entertainment-t-series-0001.jpg",
        },
        {
            id: 7,
            cat: 'bollywood',
            clap: "153k",
            date: "12-10-23",
            title: "Ranveer Singh on getting the maximum attention in Padmaavat: I am not into one-upmanship",
            desc: "Ranveer Singh-Deepika Padukone-Shahid Kapoor’s Padmaavat released yesterday and Ranveer’s performance is being hailed as the best in the film. He is being lauded by one and all for his evil and menacing act on-screen. Deepika Padukone and Shahid Kapoor’s roles are powerful too, however the audience has been going gaga over Ranveer’s performance in the film as Alauddin Khilji.When asked by a noted journalist if him getting the maximum attention makes things awkward. He replied, “Everybody is a part of the same film. I am not into one-upmanship at all. I have done a two-hero film, I have done an ensemble film. I am not into all this at all. I have a theatre background, so for me it is all about collaborating. It is a very collaborative process. You are only as good as your co-actor. Take Jim Sarbh for instance, he enhances my performance. Alia Bhatt, in Gully Boy, I feel like I don’t have to do anything, she is doing it for me. I just have to be there and react. This is the type of collaborative approach I have. I am not into ‘I am going to do my thing and let’s see what he got’. I am not into the competitive vibe. I feel it harms. It’s rooted in negativity and I am not that definitely.”",
            img: "https://www.pinkvilla.com/images/2022-09/Ranveer%20Singh%20attention%20Padmaavat.PNG",
        },
        {
            id: 8,
            cat: 'bollywood',
            clap: "163k",
            date: "12-10-23",
            title: "EXCLUSIVE: Ravi Teja shares how proud he feels for Telugu cinema’s growth; REVEALS plans about RT 75",
            desc: "During the interview, the actor was asked that in this day and age of franchise films becoming popular, which all films of his would be up for a potential sequel or a franchise model. Quickly enough his fans started chanting the name of his 2004 superhit comedy-thriller film Venky.Responding to the question the actor laughingly dodged a straight answer and asked “Why should he reveal it just about now? Let the works happen and in the meantime, I will share about it,” reassuring that something indeed is in the works for 1 or 2 films but he doesn’t want to reveal anything this early and spoil the fun. Even when asked about the potential sequel for his next Tiger Nageshwara Rao, he only said, “Let the first part come out and then we’ll see about everything.”Ravi Teja is nearing the mark of his 75th film in a career that spans across two decades. In the interview, the mass actor was asked whether he is planning anything special for his 75th film, to which the actor responded he has nothing planned as ‘special’ and revealed that he doesn’t even keep count of his films. Adding that, “Usually my staff or production companies keep track of this number and reveal the consecutive number of the films.”",
            img: "https://www.pinkvilla.com/images/2023-10/1440721604_ravi-teja-1.jpg",
        },
        {
            id: 9,
            cat: 'bollywood',
            clap: "123k",
            date: "12-10-23",
            title: "EXCLUSIVE: Here is the REAL reason why Bipasha Basu and Karan Singh Grover visited a hospital yesterday",
            desc: "Yesterday, Karan Singh Grover and Bipasha Basu were clicked outside a suburban hospital sending rumor mill on overdrive about her pregnancy. Bipasha and Karan tied the knot in April 30, 2016 and have been enjoying their marital life. The couple shares snaps from their vacations on their social media account for their fans.In an interview to a leading daily, Bipasha had earlier revealed, “We love babies. But both of us need more alone time together — because once the baby arrives, it’s always only baby time. That’s the way we both think.” She also shared, “My mom is very keen to have a granddaughter soon.”Earlier when there were rumors about her pregnancy, Bipasha had tweeted, “The curiosity about me being pregnant is sweet and a tad annoying. I am sorry to disappoint the people who are so eager for this to happen. We are not planning to have a baby right now. When we do plan, it will be joyous news which we will share with our well-wishers then. The constant guessing game is tiring. As I'm more than straightforward person, so please do not believe anything that gets written.”",
            img: "https://english.cdn.zeenews.com/sites/default/files/2022/11/12/1116045-bipasha-karan-singh-grover.gif",
        },

        {
            id: 10,
            cat: 'bollywood',
            clap: "13k",
            date: "12-10-23",
            title: "Tiger 3 trailer: Salman Khan-Katrina Kaif's magical chemistry to sleek action scenes; 5 things we can expect",
            desc: "From the look of the posters and the 'Tiger Ka Message,' we can expect the trailer will offer a larger-than-life action filled with action-packed sequences as Salman Khan confessed that he has been labeled a traitor to his country. He also discloses his plan to embark on a dangerous mission to clear his name. When Khan said, 'Jab taak Tiger maara nehi, tab taak Tiger haara nehi' (Until Tiger dies, Tiger is not defeated), really gives goosebumps and increases the anticipation for the trailer.Tiger 3, featuring one of the beloved on-screen pairs Salman Khan and Katrina Kaif, is the third installment of the famous spy series. The first two films, Ek Tha Tiger and Tiger Zinda Hai are considered to be massive hits at the box office, which is why there is a great expectation from the upcoming Tiger 3. We are expecting to have a glimpse of an interesting story in the trailer. Unlike previous films where Tiger fought villains, this film deals with the super spy facing a significant betrayal and being accused of being a traitor by his own nation.From the look of the teaser shared by YRF, we are expecting some power-packed music to complement the high-octane action sequences and the chemistry between Tiger and Zoya. The background music and some songs full of beats would make the film superior. ",
            img: "https://www.pinkvilla.com/images/2023-10/310340811_salman-khan-katrina-kaif-tiger-3-lead-1.jpg",
        },
        {
            id: 11,
            cat: 'bollywood',
            clap: "13k",
            date: "12-10-23",
            title: "Dhak Dhak actor Fatima Sana Shaikh says THIS about producer Taapsee Pannu",
            desc: "Dhak Dhak, which hit the big screens today, tells the story of four ordinary women from diverse backgrounds who embark on a bike ride, leading them to self-discovery and the importance of sisterhood during their journey. The slice-of-life drama features a talented cast including Ratna Pathak Shah, Dia Mirza, Fatima Sana Sheikh, and Sanjana Sanghi in the lead roles. Recently Fatima Sana Shaikh heaped praise on the film’s producer Taapsee Pannu and opened up on how she she had faith in her even though Fatima is not an “A-listed” actor. During a recent interaction with News18, Fatima Sana Shaikh revealed that Dhak Dhak was a significant and valuable experience for her. She acknowledges that she doesn't have control over how commercially successful her films become, but she considers herself lucky to have a producer like Taapsee Pannu who chose to work with her on Dhak Dhak. She said, “Finding individuals who have faith in actors who aren't A-listed stars can be challenging. While these actors might be talented, they aren't considered A-listers, and that's a fact. Making a film with an A-listed actor is a different scenario because it attracts more attention.”She further added, “However, it's commendable when a producer and director follow their instincts, have faith in us, and believe that we can pull it off. It gives actors like me hope that films like this can also be made with me in such roles.” ",
            img: "https://www.pinkvilla.com/images/2023-10/2132907436_dhak-dhak.jpg",
        },
        {
            id : 44,
            cat : 'fitness',
            clap : "12k",
            date : "14-10-23",
            title : "Choosing the Best Cardio Equipment for Home Workouts: Treadmill, Exercise Bike, or Rowing Machine",
            desc : "When it comes to effective cardio workouts at home, the choice between a treadmill, exercise bike, or rowing machine depends on your fitness goals, preferences, and overall health. Each option offers unique benefits, so let’s explore which one might be the best fit for you.Treadmills are excellent for those who love walking, jogging, or running. They provide a natural motion that simulates outdoor activities, making them perfect for cardio enthusiasts. Treadmills also offer incline settings, allowing you to adjust the intensity of your workout. However, they can be high-impact, so they might not be suitable for individuals with joint issues.Exercise bikes are low-impact and easy on the joints, making them ideal for people with joint pain or those recovering from injuries. They provide an efficient cardiovascular workout while minimising stress on your knees and hips. Additionally, many modern exercise bikes come with virtual classes and interactive features, enhancing the overall workout experience.Rowing machines offer a full-body workout, engaging your arms, legs, and core muscles simultaneously. They provide an effective cardiovascular workout while also building strength and endurance. Rowing machines are low-impact, making them suitable for individuals of all fitness levels. They also promote proper posture and can help improve back strength.The best option for cardio at home ultimately depends on your preferences and physical condition. If you enjoy running or walking and have healthy joints, a treadmill might be the right choice. For a low-impact option that offers versatility and interactive features, consider an exercise bike. If you prefer a full-body workout and want to engage multiple muscle groups, a rowing machine could be your best bet.",
            img : "https://images.onlymyhealth.com//imported/images/2023/October/13_Oct_2023/Main-exercise.jpg",
        
        },

        {
            id : 12,
            cat : 'fitness',
            clap : "13k",
            date : "12-10-23",
            title : "The Nightly Workout Dilemma: Expert Answers If Exercising Before Bed Affects Your Sleep",
            desc : "While exercise is undoubtedly essential for overall health, its relationship with sleep has sparked a long-standing debate. One common question that often arises is whether exercising before bedtime can either help or hinder sleep quality. To shed light on the same, we spoke to Dr Pradeep Mahajan, Regenerative Medicine Researcher, and Founder, StemRx BioScience Solutions, India, who explained the science behind exercising before bed and its potential impact on your sleep.To understand the relationship between exercise and sleep, it's crucial to grasp the basics of the sleep cycle. Dr Mahajan said, “Sleep consists of several stages, including Rapid Eye Movement (REM) and non-REM phases. Deep, restorative sleep primarily occurs during the early part of the night, with REM sleep typically dominating later stages.”He added, “Exercise has been consistently linked to improved sleep quality. It can help reduce symptoms of insomnia and contribute to falling asleep faster. Regular physical activity is associated with better sleep, and people who engage in it often report fewer sleep disturbances. However, the timing of exercise can influence how it affects sleep.”According to a meta-analysis conducted by Sports Medicine (Auckland, New Zealand), which assessed 23 studies regarding evening exercise and its impact on sleep, it was found that evening physical activity can enhance sleep quality when performed at a moderate intensity, rather than a vigorous one, and ended more than an hour before bedtime.",
            img : "https://images.onlymyhealth.com/imported/images/2023/October/13_Oct_2023/Main-exercising-before-bed.jpg",
        
        },

        {
            id : 13,
            cat : 'fitness',
            clap : "14k",
            date : "12-10-23",
            title : "7 Surprising Benefits of a 10-Minute Daily Jog",
            desc : "In today's fast-paced world, finding time for exercise can be a challenge. However, dedicating just 10 minutes a day to jogging can bring about remarkable improvements in your overall health and well-being. Here's how:Jogging for 10 minutes every day elevates your heart rate, improving cardiovascular endurance. It strengthens the heart, lowers blood pressure, and reduces the risk of heart diseases.Regular jogging burns calories, aiding in weight management and promoting a healthy body mass index (BMI). It boosts metabolism, helping you shed unwanted pounds and maintain a healthy weight.Jogging triggers the release of endorphins, the body's natural mood lifters. This helps reduce stress, anxiety, and symptoms of depression. A brief jog can clear your mind, boost your self-esteem, and enhance overall cognitive function.Jogging engages various muscle groups, toning your legs, buttocks, and core. Weight-bearing exercises like jogging also promote bone density, reducing the risk of osteoporosis as you age.Regular physical activity, even in short bursts, promotes better sleep. Jogging helps regulate your sleep patterns, ensuring you enjoy restorative and deep sleep, vital for overall health and vitality.Studies consistently show that regular exercise, even in small amounts, is linked to increased lifespan. By dedicating just 10 minutes a day to jogging, you're investing in a longer, healthier life.Incorporating a short daily jog into your routine is a simple yet powerful way to improve your physical and mental health. So lace up your shoes, step outside, and experience the transformative benefits of this quick and accessible form of exercise. Your body and mind will thank you!        ",
            img : "https://images.onlymyhealth.com//imported/images/2023/October/11_Oct_2023/Main-jog.jpg",
        
        },

        {
            id : 14,
            cat : 'fitness',
            clap : "19k",
            date : "12-10-23",
            title : "Workout Tips For People Living With Knee Pain: Here's A Tailored Workout Guide For Different Knee Disorders",
            desc : "Knees are no less than our backbones as they support the weight of our entire body. That is why knee pain can be a life-altering issue for many individuals, hindering their ability to stay active and fit. To exercise with knee pain, it's essential to understand the various knee disorders that can cause discomfort and adapt your workouts accordingly. Here are some workout tips tailored to different knee disorders:According to the Arthritis Foundation, 'Osteoarthritis was known as a wear and tear condition, generally associated with ageing. But we know now that it is a disease of the entire joint, and can degrade cartilage, change bone shape and cause inflammation, resulting in pain, stiffness and loss of mobility.'To manage knee pain associated with osteoarthritis, consider low-impact exercises like swimming, stationary cycling, and water aerobics. These activities are easier on the joints and can help improve mobility.PFPS, also called 'runner's knee' is used to describe pain in the kneecap, stated the American Academy Of Orthopaedic Surgeons (AAOS). 'It is common in people who participate in sports, particularly females and young adults. But PFPS can occur in nonathletes, as well,' they added, sharing that the resulting pain and stiffness make it difficult to climb stairs, kneel down, and perform other everyday activities.If you are dealing with PPFS, focus on exercises that target the quadriceps and hamstrings, such as leg lifts and leg curls. Also, ensure you have proper footwear and a gradual increase in workout intensity.",
            img : "https://images.onlymyhealth.com/imported/images/2023/October/13_Oct_2023/Main-workouttipsforkneepain.jpg",
        
        },

        {
            id : 15,
            cat : 'fitness',
            clap : "130k",
            date : "12-10-23",
            title : "Glimpse Into Janhvi Kapoor and Ananya Panday's Dynamic Workout Routines",
            desc : "Namrata Purohit shared Janhvi Kapoor's impressive performance of the single leg deadlift on the reformer. This exercise not only targets various muscle groups but also hones coordination and balance. Kapoor's dedication is evident as she tackles this challenging move with finesse. Purohit revealed that they usually perform this exercise with 1 to 1 and a half springs, indicating the intensity of their workout sessions. This balanced approach ensures Kapoor is not just strong but also agile, highlighting the importance of a well-rounded fitness routine.Ananya Panday opted for an energetic start to her week with the jump board. This dynamic exercise not only provides a cardio boost but also intensely works the legs. Jump board exercises are excellent for enhancing cardiovascular endurance while toning and strengthening the lower body muscles. Panday’s choice reflects her commitment to keeping her workouts diverse and engaging.Both exercises showcased by these Bollywood sensations underline the significance of incorporating variety into one’s fitness routine. By challenging different muscle groups and enhancing coordination, these exercises contribute to building functional strength, essential for everyday activities.Fitness enthusiasts can draw inspiration from Janhvi Kapoor and Ananya Panday’s workout choices. Embracing diverse exercises, focusing on balance and coordination, and adding a touch of cardio can elevate your fitness journey. Remember, the key to a successful workout routine lies not just in hard work but also in enjoying the process. So, take a cue from these Bollywood stars, keep it challenging, engaging, and most importantly, have fun while breaking a sweat!.",
            img : "https://images.onlymyhealth.com//imported/images/2023/October/12_Oct_2023/Main-fit.jpg",
        
        },

        {
            id : 16,
            cat : 'fitness',
            clap : "134k",
            date : "12-10-23",
            title : "Elevate Your Workout: Expert Shares Effective Tips for Building Muscle and Strength",
            desc : "When it comes to fitness goals, do we all want to build muscle and get stronger? Whether you're new to the gym or a seasoned pro, there are some simple yet effective ways to step up your workout game and make real progress toward your body goals.Lee Keshav, Racing driver and Fitness Expert, lists some practical tips that can help you build muscle and gain strength in a more conversational and fluid way.“To begin, it's essential to address the importance of establishing well-defined objectives. Prior to exploring thoughts of weights and exercise equipment, it's advisable to pause and articulate your desired outcomes,” said Keshav.“Whether your aim is to gain muscle or increase your lifting capacity, establishing precise goals infuses your workout with a sense of purpose. It's worth noting that these objectives should be both achievable and tailored to your current fitness level to prevent potential disillusionment,” he added.According to our expert, consistency is a secret weapon in the fitness world. It's not about going all out one day and then vanishing from the gym for a week. No, it's about creating a workout routine you can stick to. Whether that means hitting the gym three, four, or five times a week, just stick with it.Compound exercises are like your muscle-building buddies. They work multiple muscle groups at once, letting you lift heavier and build more muscle. Think squats, deadlifts, bench presses, and pull-ups. Include them in your routine, and you'll be on your way to some serious strength gains.",
            img : "https://images.onlymyhealth.com/imported/images/2023/October/10_Oct_2023/main%20(10)-workout.jpg",
        
        },

        {
            id : 17,
            cat : 'fitness',
            clap : "153k",
            date : "12-10-23",
            title : "Struggling with Back Pain from Desk Work? Try These 5 Yoga Poses for Relief",
            desc : "Begin in a tabletop position, arch your back up (cat) and then down (cow) while inhaling and exhaling. This fluid movement flexes and extends your spine, promoting flexibility and reducing stiffness.Start on your hands and knees, lift your hips towards the ceiling, and straighten your legs, forming an inverted V shape. Downward Dog stretches the entire back, promoting spinal flexibility and relieving tension in the upper and lower back.Start on your hands and knees, lift your hips towards the ceiling, and straighten your legs, forming an inverted V shape. Downward Dog stretches the entire back, promoting spinal flexibility and relieving tension in the upper and lower back.Sit with your legs crossed, place one hand behind you and the opposite elbow on the outside of the bent knee. Twist gently to the side. This pose enhances spinal mobility and releases tension in the mid and lower back.Incorporating these yoga poses into your daily routine, even for just a few minutes, can significantly alleviate back pain caused by long hours of sitting. Remember to breathe deeply and mindfully while practising these poses to enhance their effectiveness. As with any exercise regimen, it's advisable to consult a healthcare professional or a certified yoga instructor, especially if you have existing back issues, to ensure these poses are suitable for your condition. With regular practice, you'll find relief and restore balance to your back, promoting a healthier and more comfortable workday.",
            img : "https://images.onlymyhealth.com//imported/images/2023/October/10_Oct_2023/main-yoga.jpg",
        
        },

        {
            id : 18,
            cat : 'fitness',
            clap : "123k",
            date : "12-10-23",
            title : "Unlock Refined Abs at Home with these 8 Power Packed Superfoods",
            desc : "In the pursuit of chiselled abs, the key isn't just endless crunches – it's also about what you put on your plate. Superfoods, packed with essential nutrients and antioxidants, can give you the edge in your quest for refined abs without leaving the comfort of your home.Creamy and delicious, avocados are rich in monounsaturated fats, which help burn belly fat. They're also loaded with potassium, aiding in muscle contraction and preventing cramps during workouts.Protein-packed Greek yoghurt is an excellent source of calcium and probiotics, promoting a healthy gut. It keeps you feeling full, supports muscle recovery, and contributes to a toned physique.Quinoa is a protein powerhouse and a complex carbohydrate that provides sustained energy. It's also high in fibre, keeping you satisfied and preventing overeating.Packed with antioxidants, vitamins, and minerals, blueberries combat inflammation and boost your immune system. Their natural sweetness makes them a perfect alternative to sugary snacks.Salmon is abundant in protein and omega-3 fatty acids, promoting muscle growth and reducing inflammation. It's a lean protein source that aids in maintaining a healthy weight.Incorporate these superfoods into your daily meals, stay consistent with your workouts, and remember to stay hydrated. Combined with regular exercise and proper nutrition, these superfoods can be your secret weapon to achieving those refined abs you've always dreamed of – all within the confines of your home. Stay dedicated, stay healthy, and watch your body transform!",
            img : "https://images.onlymyhealth.com//imported/images/2023/October/09_Oct_2023/Main_abs.jpg",
        
        },

        {
            id : 19,
            cat : 'fitness',
            clap : "163k",
            date : "12-10-23",
            title : "Benefits And Simple Morning Breathing Exercises To Improve Focus",
            desc : "In the hustle and bustle of modern life, finding ways to improve focus and start the day on the right foot is essential. One effective and simple strategy is to incorporate morning breathing exercises into your daily routine.Deep, controlled breathing in the morning helps oxygenate your brain and body. Increased oxygen levels sharpen your mental faculties, making it easier to concentrate.These exercises help reduce cortisol, the stress hormone, promoting a calmer state of mind. Reduced stress leads to improved concentration and cognitive function.Proper breathing stimulates the parasympathetic nervous system, providing a natural energy boost without the need for caffeine.Combine deep breathing with gentle stretches to awaken your body and mind. Inhale as you stretch upward, exhale as you release. Repeat for several cycles.Incorporating morning breathing exercises into your routine takes only a few minutes, but the benefits can be felt throughout the day. Improved focus, reduced stress, and increased energy are just a few of the positive outcomes you'll experience. Make these exercises a daily habit, and watch as your concentration and productivity soar.These exercises help reduce cortisol, the stress hormone, promoting a calmer state of mind. Reduced stress leads to improved concentration and cognitive function.",
            img : "https://images.onlymyhealth.com//imported/images/2023/September/18_Sep_2023/Main_breathe.jpg",
        
        },

        {
            id : 20,
            cat : 'fitness',
            clap : "13k",
            date : "12-10-23",
            title : "Unlock Your Inner Hrithik: 8 Lifestyle Habits for a Healthy Body",
            desc : "Achieving a physique like Bollywood heartthrob Hrithik Roshan requires dedication, discipline, and a focus on healthy living. Here are some lifestyle habits that can help you sculpt your body and feel your best, just like Hrithik Roshan:Hrithik follows a balanced diet rich in lean proteins, complex carbohydrates, and essential fats. Opt for whole foods like fruits, vegetables, whole grains, and lean meats. Avoid processed foods and sugary drinks.Hrithik's enviable physique is a result of consistent workouts. Aim for a mix of cardiovascular exercises, strength training, and flexibility exercises. Find an activity you enjoy to stay motivated.Stay hydrated throughout the day. Water helps in digestion, keeps your skin healthy, and aids in muscle recovery after workouts. Herbal teas and infused water can also be great choices.Chronic stress can negatively impact your health. Practice relaxation techniques like meditation, yoga, or deep breathing exercises to keep stress levels in check.Building a body like Hrithik's takes time and consistent effort. Stay committed to your healthy habits and be patient with your progress.Pay attention to portion sizes and listen to your body's hunger and fullness cues. Mindful eating can help prevent overeating and promote better digestion.Excessive alcohol consumption and smoking can harm your health and fitness goals. Limit alcohol intake and avoid smoking entirely to maintain a healthy lifestyle.Remember, everyone's body is different, so it's essential to consult a healthcare professional or a fitness expert before making significant changes to your diet or exercise routine. Stay dedicated, stay positive, and with time and effort, you can achieve a healthier version of yourself, just like Hrithik Roshan. ",
            img : "https://images.onlymyhealth.com//imported/images/2023/October/06_Oct_2023/Main-Hrithik-Roshan.jpg",
        
        },

        {
            id : 21,
            cat : 'fitness',
            clap : "13k",
            date : "12-10-23",
            title : "Disha Patani Sets Fitness Goals By Doing Martial Arts: Know Benefits",
            desc : "In the world of Bollywood, Disha Patani stands out not just for her acting prowess, but also for her incredible fitness levels. She has been inspiring millions with her dedication to martial arts, showcasing a blend of strength, agility, and grace. But her journey isn't just about looking good; it’s about reaping the myriad benefits that martial arts offer.Martial arts training enhances cardiovascular health, muscular strength, flexibility, and endurance. It’s a full-body workout that tones muscles and improves overall fitness levels.One of the core aspects of martial arts is self-defence. Learning these techniques empowers individuals, especially women, to protect themselves and build confidence in challenging situations.Martial arts enhance balance and coordination, which are essential for preventing injuries and improving overall body awareness.Disha Patani’s dedication to martial arts highlights itsEsha Gupta's dedication to her workout routine serves as a major source of inspiration for fitness enthusiasts everywhere. Read ahead to know. holistic benefits. It’s not merely a form of exercise; it’s a lifestyle that nurtures both physical and mental well-being. So, whether you're aiming to follow in her footsteps or simply looking for a new way to stay fit, consider exploring the world of martial arts. Your body and mind will thank you for it.Engaging in martial arts releases endorphins, reducing stress and promoting a sense of well-being. It’s an excellent way to channel negative energy and find balance in a busy life. Incorporating these moves into your fitness regimen can lead to a toned body and improved overall health. Read ahead to know. ",
            img : "https://images.onlymyhealth.com//imported/images/2023/October/05_Oct_2023/Main-disha-patani.jpg",
        
        },

        {
            id : 22,
            cat : 'food',
            clap : "12k",
            date : "14-10-23",
            title : "Sourdough Galette with Delicata Squash",
            desc : "What you see here is a fully loaded winter (or autumn!) galette. I started making it a few months back inspired by a recipe in Sarah Owens' masterful Sourdough book. Her whole-grain boosted sourdough crust caught my attention. I also didn't need convincing related to the garlic-spiked labneh slathered beneath summery toppings. I don't need to tell most of you, as I initially typed this, we were a long way from summer.Sarah's galette was loaded with beautiful tomatoes, but by the time I spotted her recipe, tomatoes were long gone for the year. My tart needed to be more of a cold weather affair, and the delicata squash and shallots I had on hand seemed a natural evolution. I've baked this galette four or five times since, and it's omg-so-good. If you love savory tarts this is for you. And please don't sweat it if you don't maintain a sourdough starter, I'll note a couple alternative paths you can take down below.This galette is a bit of a project if you start from zero at late in the evening with dinner as your intention. Pre-make most of the components when you have a few minutes here or there in the days prior, and it will come together effortlessly when you're ready to bake the finale.",
            img : "https://images.101cookbooks.com/SOURDOUGH-GALETTE-h.jpg?w=1200&auto=compress&auto=format",
        
        },

        {
            id : 23,
            cat : 'food',
            clap : "12k",
            date : "14-10-23",
            title : "A Rustic Scallion & Chive Panade",
            desc : "The panade recipe in The Zuni Cafe Cookbook came to my attention when a friend baked a beautiful double-version of it in an over-sized AGA dutch oven and served it at a dinner party years ago. It was the show-stopping centerpiece of a meal flanked by a beautiful winter green + chicory salad and gem-shaded glasses of wine. The combination of bubbling cubes of brothy bread and caramelized onions silkily merging with molten threads of cheese is knee-buckling. It’s the perfect example of a short list of the simplest ingredients coming together into something much more than then sum of their parts.I’ve baked variations of this panade in the years since, and it never disappoints. It’s endlessly adaptable, meaning that you can add seasonal ingredients to suit your fancy. For example, in my case, I do a vegetarian version by switching up the broth, and I like my onions on the caramelized side of the spectrum. I’ll add whatever sautéed greens or roasted vegetables I have around. Judy also listed a range of ideas and variations in the cookbook, so if you have it (and you should!) be sure to have a glance at those for year-round inspiration. Her original had chard. I use lots of scallions in mine. In short, it’s one of those IYKYK recipes. Molly Wizenberg knew what was up way back in 2005 when she wrote about the Judy panade recipe here.",
            img : "https://images.101cookbooks.com/panade-recipe-h1.jpg?w=1200&auto=compress&auto=format",
        
        },

        {
            id : 24,
            cat : 'food',
            clap : "12k",
            date : "14-10-23",
            title : "Seeded Pumpkin and Feta Muffins",
            desc : " originally highlighted this recipe in 2010, and revisited it last week. So good! You all know by now, I love self-published cookbooks. Particularly ones with a strong point of view, thoughtful design, and inspired recipes. In that spirit, I have a gem to share with you this afternoon. It is a light-hearted little cookbook titled Martha Goes Green, created by a media-savvy trio of friends in Melbourne, Australia. The book includes a recipe for these sunflower seed and spinach-flecked pumpkin feta muffins. Savory muffin fans, you know who you are, these don't disappoint.When I spent a month traveling around New Zealand a few years back, it became clear that New Zealand is the land of the A+ muffin. Scones too, but muffins in particular. There were lots of savory versions to choose from, but my favorites always had winter squash in them. If this book is any indication, I suspect Australia might be similar. Anyhow, these muffins are exactly the sort of thing I crave and remember from that trip. I love the kick of black pepper here, and the blend of cheese. It's not quite pumpkin season here, so I substituted butternut squash. But really, just about any winter squash will do.The recipes have an accessible, achievable vibe to them and I have the vegetarian pho, satay curry, stir fried noodles, and lentil mushroom moussaka earmarked to try next. The book doesn't seem to be available anymore (it has been over a decade), but you can still check in on some of the recipes here and here on Rosie's site.",
            img : "https://images.101cookbooks.com/PUMPKIN-FETA-MUFFINS-2020_DSF5406.jpg?w=1200&auto=compress&auto=format",
        
        },

        {
            id : 25,
            cat : 'food',
            clap : "12k",
            date : "14-10-23",
            title : "Pasta with Baby Kale, Toasted Pumpkin Seeds, and Pesto",
            desc : "Last week, on Instagram, I posted an on-the-fly, super-quick pasta dish I made for lunch. It was cute, little, elbow pasta tossed with the last of a jar of pesto, a few handfuls of baby kale, toasted pumpkin seeds, and a shower of lemon zest. So good! So easy! A number of you requested the recipe, and I've included it down below. If you're blessed with the good fortune of having access to a Meyer lemon tree, by all means, use those. Otherwise, regular lemons will do the job just fine. Enjoy! -h.Last week, on Instagram, I posted an on-the-fly, super-quick pasta dish I made for lunch. It was cute, little, elbow pasta tossed with the last of a jar of pesto, a few handfuls of baby kale, toasted pumpkin seeds, and a shower of lemon zest. So good! So easy! A number of you requested the recipe, and I've included it down below. If you're blessed with the good fortune of having access to a Meyer lemon tree, by all means, use those. Otherwise, regular lemons will do the job just fine. Enjoy! -h.Last week, on Instagram, I posted an on-the-fly, super-quick pasta dish I made for lunch. It was cute, little, elbow pasta tossed with the last of a jar of pesto, a few handfuls of baby kale, toasted pumpkin seeds, and a shower of lemon zest. So good! So easy! A number of you requested the recipe, and I've included it down below. If you're blessed with the good fortune of having access to a Meyer lemon tree, by all means, use those. Otherwise, regular lemons will do the job just fine. Enjoy! -h",
            img : "https://images.101cookbooks.com/pasta-with-baby-kale-h.jpg?w=1200&auto=compress&auto=format",
        
        },

        {
            id : 26,
            cat : 'food',
            clap : "12k",
            date : "14-10-23",
            title : "Homemade Pasta,Everything I know about making homemade pasta. ",
            desc : "Let’s make homemade pasta! If you have flour, two eggs, a splash of olive oil, and a bit of salt, you can do it right now. You don’t need special Italian pasta flours to make great homemade pasta, and you don’t need to worry if you don’t have a pasta maker. You can make pasta by hand with a basic rolling pin. I make pasta at home all the time, and this has become my go-to “everyday” recipe. It makes a wonderful, versatile dough that you can roll out into a range of noodles and shapes.What you’ll find here is my basic pasta dough and process. The basics. Beyond that, I’m going to give you an earful. I’ll walk you through a number of variations and considerations down below. And I’ll include step-by-step pictures of the process of making pasta dough. You can do it by hand, with a stand maker, or with a pasta maker. Homemade pasta is absolutely one of my favorite things to make and I’m consolidating everything I’ve learned about it over the years into this one post along with links to my favorite resources. It’s an ongoing journey for me, so I’ll continue to update this. Enjoy and happy pasta making!Let’s start with equipment. I have opinions related to some of the pasta equipment out there and have purchased and used quite a range over the years. My takeaway? In the end, you don’t need much. Certainly not to get started. Start by making your pasta by hand first, and if you’re into it, buy an Marcato Atlas 150 hand-crank pasta maker. I’ve had mine for nearly twenty years, and with a little TLC it should last a lifetime. I make my pasta dough by hand, roll it out with the Atlas.",
            img : "https://images.101cookbooks.com/HOMEMADE-PASTA-RECIPE-h.jpg?w=1200&auto=compress&auto=format",
        
        },

        {
            id : 27,
            cat : 'food',
            clap : "12k",
            date : "14-10-23",
            title : "Spaghetti with No-Cook Sauce",
            desc : "You can tell by the streak of tomato recipes here lately, I’m in the thick of it. And today is no exception. I made this for dinner last night, and if you have a box of spaghetti and some good tomatoes you’re half way there. What you see is a tangle of spaghetti, olives, nuts, vegetables, and torn mozzarella in a no-cook, lemon-zested tomato sauce. It’s bright, summery, colorful food, easy to adapt based on what you have on hand. The key? Make it on an extra hot night when tomato season is at its maximum. And don’t even mess around if your tomatoes aren’t on point.This is a quintessential pantry meal. I added olives, pine nuts, and a bit of cheese to the base ingredients of spaghetti and tomatoes, but you can experiment with endless other directions. I love the pine nut component here, but toasted almonds, walnuts, hazelnuts, or cashew would all be great. You could do a spicy version by adding a dollop of harissa to the sauce, or some chile flakes, or a tablespoon of toasted sesame chile oil. On the vegetable front, you see string beans pictured (because that's whats coming out of my garden right now), but load up on anything from broccoli and cauliflower florets, or asparagus - basically, any quick cooking veg that you can throw in the pasta water at the last minute.Use your favorite spaghetti noodle here. I love a traditional spaghetti noodle, don't get me wrong, but one of the big surprises to me over the past few years is how good some of the whole grain and pulse-based pastas are. There is a wide range of brands around, so you'll need to experiment. My advice on this front is to 'date around' until you find a few brands and shapes you like. For day to day pasta eating when you compare nutritional labels, the noodles made with more whole ingredients can deliver significantly more vitamins, minerals, fiber, protein and the like. So it's worth it to play around.",
            img : "https://images.101cookbooks.com/SPAGHETTI-NO-COOK-SAUCE-h.jpg?w=1200&auto=compress&auto=format",
        
        },

        {
            id : 28,
            cat : 'food',
            clap : "12k",
            date : "14-10-23",
            title : "Pasta with Creamy Crushed Walnut Sauce",
            desc : "Toasted walnuts pounded with garlic into a creamy sauce make this pasta easy and exceptional. If you have dried pasta, a few cloves of garlic, walnuts, and black pepper you can make this. The other ingredients - lemon zest, a bit of grated cheese, a finishing cascade of breadcrumbs and herbs are encouraged, but not essential.This is the best thing I’ve cooked with the least amount of effort in the past month. Most of my lazy lunches never make it to the site, but this pasta is an exception. If you have a favorite dried pasta, a few cloves of garlic, walnuts, and black pepper you can make it too. The other ingredients - lemon zest, a bit of grated cheese, a finishing cascade of breadcrumbs and herbs are encouraged, but not essential. It's the kind of meal that checks the box when you're in the mood for creamy pasta, but no cream is needed. You get rich, nutty, walnut sauce from pounding garlic and toasted walnuts into a paste and thinning with a good amount of salted pasta water. Peak comfort food.Make a quick pasta & bean stew if you have leftovers. Combine the walnut-y pasta with some white beans in a saucepan. Add good tasting broth, heat, season, and add a bit of grated cheese to bring it all together. A handful of well-chopped kale wouldn't be unwelcome.",
            img : "https://images.101cookbooks.com/PASTA-WALNUT-SAUCE_recipe-h.jpg?w=1200&auto=compress&auto=format",
        
        },

        {
            id : 29,
            cat : 'food',
            clap : "12k",
            date : "14-10-23",
            title : "Easy Tomato & Pasta Salad",
            desc : "Pasta salad extraordinaire - tomatoes & pasta in an A+ one-bowl meal. Whole-grain pasta, baby kale, basil, and the best tomatoes you can get your hands on, with a generous drizzle of strong harissa dressing.Tomato season is officially on from where I stand. Using a mother lode of assorted cherry, zebra, and heirloom tomatoes, I made this quick, summer-tastic pasta salad for a picnic the other day. Whole-grain pasta, baby kale, basil, and the best tomatoes you can get your hands on get a generous drizzle of strong harissa dressing (garlic, harissa, nutritional yeast, etc.). This is exactly what you want to be making during peak tomato season, and you can whip up the dressing and slice the tomatoes as your pasta cooks.Beyond that, everything comes together in a flash, and good pasta salad is always a crowd pleaser. I've added some alternate suggestions below as well, building on the general concept. I guess what I'm encouraging is a bit of latitude when it comes to add-ins and flare. You could even make a nice, clear, garlic broth, and pour it over a bowl of leftovers for a beautiful soup.Enjoy!",
            img : "https://images.101cookbooks.com/all-the-tomatoes-salad-recipe-h.jpg?w=1200&auto=compress&auto=format",
        
        },

        {
            id : 30,
            cat : 'food',
            clap : "12k",
            date : "14-10-23",
            title : "Shredded Un-Chicken Salad",
            desc : " A vegetarian take on the Chinese chicken salad of my youth. Toss shredded lettuces and cabbage, lots of cilantro, green onions, and the protein of your choice with a strong sesame-soy dressing punctuated with the bite of hot mustard. Forever one of my favorite salads.This has been an evolving recipe over the past twenty years and I think it *finally* nails all the notes I love in a great Chinese chicken salad. Specifically, it's a vegetarian take on what I think of as the amazing Chinese chicken salads of my youth, circa the 1980s. This version includes all my favorite components - the awesome super-strong hot mustard & sesame-soy dressing, the pile-it-on approach to cilantro, the scallions and toasted nuts. Then, with this version, you introduce some sort of alternate protein (or plant-based chicken). The whole situation is compiled into a feathery, light mountain of deliciousness.In place of shredded chicken, in the traditional version, you have options. I’ll be honest and say, I’m not a huge fan of the highly-processed plant-based meats available, but there is one brand of plant-based chicken Wayne buys on occasion. This one - green bag, original (*not sponsored). I occasionally reach for it, especially in a recipe like this one, when I’m really chasing the nostalgia. Anyway, it’s the best I’ve tasted. Alternately, if you’re willing to let go of the chicken angle - a hard-boiled egg, or a bit of pan-fried tofu is all you need to make a one bowl meal of things.",
            img : "https://images.101cookbooks.com/shredded-un-chicken-salad-recipe-h.jpg?w=1200&auto=compress&auto=format",
        
        },

        {
            id : 31,
            cat : 'food',
            clap : "12k",
            date : "14-10-23",
            title : "Sriracha Rainbow Noodle Salad",
            desc : "This is a noodle salad you'll crave every day. A radiant, color-flecked tangle of noodles, cabbage, shredded carrots, pickled sushi ginger, and an abundance of cilantro, basil, and scallions. It has tofu and peanuts, coconut, ginger, avocado, and hemp seeds. The dressing(!) - it's simple but strong, and steps in with an assertive spicy sriracha-lime punch.This is a noodle salad you'll crave every day. A radiant, color-flecked tangle of noodles, cabbage, shredded carrots, pickled sushi ginger, and an abundance of cilantro, basil, and scallions. It has tofu and peanuts, coconut, ginger, avocado, and hemp seeds. The dressing(!) - it's simple but strong, and steps in with an assertive spicy sriracha-lime punch. This is one of those near-perfect one dish meals. You might not want to prep this many ingredients every day, but you'll forget about that detail the minute you take a bite. And you can see exactly how it comes together in the video below.A couple of tips - you can make the dressing a few days in advance. You can also do much of the chopping and grating a day or two in advance. Cook the noodles to order, though.et me know if you try it, and please report back if you land on any seasonal adaptations that you are particularly excited about.",
            img : "https://images.101cookbooks.com/sriracha-rainbow-noodle-salad-2.jpg",
        
        },
        {
            id : 32,
            cat : 'food',
            clap : "12k",
            date : "14-10-23",
            title : "Raw Tuscan Kale Salad",
            desc : "A beautiful, shredded, raw kale salad tossed in a vibrant, lemony-pecorino dressing. From Melissa Clark's cookbook, In the Kitchen with A Good Appetite.ometimes a good kale salad is in order. And this is one of those times. I'm home. My suitcase is unpacked. My laundry is done. Fresh flowers are finding their way back into Mason jars, and the avalanche of mail is, quite honestly, being ignored. Travel time from our apartment in Testaccio to our front door in San Francisco: twenty hours. Twenty. Hours. It hurts to even type that. After travel like this I end up craving extra-wholesome food for days after arriving home. This time, my first day back, I turned out a super satisfying lunch inspired by two recipes, including the Raw Tuscan Kale Salad, in Melissa Clark's cookbook - In the Kitchen with A Good Appetite.So, it is a salad I threw together for a casual lunch, but can also imagine making for friends or family. I can imagine endless ways you might work it into a one-dish meal. Make a bit of extra dressing, add some farro to the mix, and top with a poached egg, for example. Or, incorporate some roasted winter squash alongside the kale. Or, do a more finely chopped version before folding every thing into a bowl of seasoned quinoa. I ate the salad alongside Melissa's Mustard and Pickle-spiked Tofu Salad served on toasted poppy seed wheat bread. At that moment, few things would have tasted better.I doubled up on the breadcrumbs here, because who doesn't like a bit of extra crunch? This is reflected in the recipe below. And for those of you without access to pecorino, freshly grated Parmesan is a reasonable substitute.",
            img : "https://images.101cookbooks.com/raw-tuscan-kale-salad-h.jpg?w=1200&auto=compress&auto=format",
        },
        {
            id : 33,
            cat : 'hollywood',
            clap : "12k",
            date : "14-10-23",
            title : "'Hunger Games' Director Says He 'Totally Regrets' Splitting 'Mockingjay' Into Two Films",
            desc : "During an interview with People magazine, published online Friday, the filmmaker admitted that if he had to redo the Jennifer Lawrence-led films, he wouldn’t split Mockingjay into two separate parts.“I totally regret it. I totally do,” Lawrence said. “I’m not sure everybody does, but I definitely do.”He also noted that the team agreed at the time that the two halves of Mockingjay, which were released in theaters a year apart, “had their own separate dramatic questions,” which made for complete arcs. But he also acknowledged why some fans weren’t too happy with the long waiting period between the films.“What I realized in retrospect — and after hearing all the reactions and feeling the kind of wrath of fans, critics and people at the split — is that I realized it was frustrating,” Lawrence said. “And I can understand it.”But the director also added that it was nice being able to adapt more from the books by breaking it up into two parts.“In truth, we got more on the screen out of the book than we would’ve in any of the other movies because you’re getting close to four hours of screen time for the final book,” he explained.As for his upcoming prequel The Hunger Games: The Ballad of Songbirds and Snakes, which arrives in theaters on Nov. 17, Lawrence said the intention was always to make one movie from Suzanne Collins’ book that was published in 2020, even if it meant for a longer run time.",
            img : "https://www.hollywoodreporter.com/wp-content/uploads/2023/10/Francis-Lawrence-and-Mockingjay-Still-Getty-H-2023.jpg?w=390&h=220&crop=1",
        
        },
        {
            id : 34,
            cat : 'hollywood',
            clap : "12k",
            date : "14-10-23",
            title : "How ‘Rick and Morty’ Cast Its New Voice Stars",
            desc : "After a nearly six-month search that featured thousands of candidates, newcomers Ian Cardoni and Harry Belden now find themselves squarely in the spotlight after they officially made their debut as the voices of the narcissistic, alcoholic genius Rick and his bumbling grandson Morty, respectively, in the season seven premiere of the Adult Swim animated hit.Sunday's premiere marked the first episode of Rick and Morty without co-creator Justin Roiland, who until now had voiced both characters (among others) for all of the show’s 61 previous episodes. Roiland was fired from the cult hit and saw his Hollywood empire implode after allegations of domestic violence surfaced and reports, including in The Hollywood Reporter, uncovered years of his allegedly troubling behavior. An Orange County District Attorney dismissed the domestic violence charges, citing insufficient evidence and has also denied new allegations of misconduct that ranges from sexual harassment to sexual assault.For Rick and Morty showrunner Scott Marder, who led the casting search, the goal was clear: To make the change as seamless as possible so viewers — who knew about the behind-the-scenes drama as well as those who didn’t — couldn’t notice a difference in the two beloved characters. Marder and co-creator Dan Harmon both see the additions of Cardoni and Belden as a way to add years to the show’s lifespan after the decision was made to use two voices rather than one for both Rick and Morty.",
            img : "https://www.hollywoodreporter.com/wp-content/uploads/2023/10/Rick-and-Morty-and-inset-of-Harry-Belden-and-Ian-Cardoni-H-2023.jpg?w=1296&h=730&crop=1&resize=1000%2C563",
        
        },
        {
            id : 35,
            cat : 'hollywood',
            clap : "12k",
            date : "14-10-23",
            title : "MIPCOM Deal Brief: ZDF Launches LatAm FAST Channel, Cineflix Sells Tim Roth-Starrer ‘Last King of the Cross’",
            desc : "The deals are a sign that despite the uncertainty and challenges facing the global TV industry, there is still business being done.International TV market MIPCOM Cannes kicked off Monday with a flurry of licensing deals, a sign that despite the uncertainty and challenges facing the global TV industry, there is still business being done.ZDF Studios, the commercial sales arm of the German public broadcaster, announced a groundbreaking deal with Hispanic media group Castalia Communications that will see them launch a Free Ad-Supported Streaming TV (FAST) service for the Latin American region using ZDF Studios’ extensive back catalog. The channel, which will focus on a curated selection of Spanish-language drama programming, is set to launch in the second quarter of 2024. Latin America has seen strong growth in the FAST market, with a recent report by Global Industry Analysts Inc. predicting business in the region will top $217 billion by 2026.",
            img : "https://www.hollywoodreporter.com/wp-content/uploads/2023/10/Last-King-of-the-Cross-Poster-Cineflix-Rights.jpeg?w=260&h=150&crop=1",
        
        },
        {
            id : 36,
            cat : 'hollywood',
            clap : "12k",
            date : "14-10-23",
            title : "John Oliver Addresses Israel-Hamas War in Serious Moment at Start of ‘Last Week Tonight’",
            desc : "'Peace is not optional and will require some tough decisions,' he said, calling on leaders to not retaliate.'And I can't say where a peace process ends, but it just has to start with that kind of ability to recognize our common humanity.'John Oliver took a moment to share his thoughts on the Israel-Hamas war at the start of HBO‘s Last Week Tonight. In a rare move, the host addressed the audience before the title sequence aired on Sunday’s show.“Without all the music and the lights and — at least theoretically — the laughter, I wanted to briefly talk to you about what has clearly been a terrible week,” he began. “The immense suffering in Israel and Gaza has been sickening to watch, and we’re not gonna be covering it in the main body of our show tonight for a couple of reasons. First, it’s horrific. I don’t really want to tell jokes about carnage right now, and I’m pretty sure that you don’t want to hear them. And second, we’re taping this on Saturday afternoon and you’ll be watching it Sunday night or Monday morning through an illegal VPN. I do know who I’m talking to,” he quipped.He played an interview between CNN’s Jake Tapper and Noi Katzman, whose brother Chaim was killed last weekend in the Hamas terrorist attacks. Katzman ended his interview by saying he didn’t want his brother’s death to “be used to kill innocent people. … I don’t want anything to happen to people in Gaza like what happened to my brother, and I’m sure he wouldn’t have any either. So that’s my call to my government to stop killing innocent people. And that’s not the way that brings us peace and security to people in Israel.”",
            img : "https://www.hollywoodreporter.com/wp-content/uploads/2023/10/john-oliver_0-H-Season-10-Episode-11-Crop-Publicity-2-H-2023.jpg?w=350&h=200&crop=1",
        
        },
        {
            id : 37,
            cat : 'hollywood',
            clap : "12k",
            date : "14-10-23",
            title : "Chris Evans Talks “Enjoying Life” With Wife Alba Baptista After Two Wedding Ceremonies",
            desc : "Chris Evans has opened up about tying the knot with actress Alba Baptista last month and how married life has been since.The actor confirmed the news for the first time publicly while on stage Saturday at New York Comic Con, saying, “I got married. It was really, really great.”Evans added that the couple had two ceremonies: “We had one on the East Coast. We did one in Portugal. My wife’s Portuguese.”He also went on to explain how stressful the planning process of weddings can be, saying, “For those of you who are married, it takes a lot out of you.”But Evans noted that now that he and his wife are “through that, we’ve kinda just been enjoying life, gearing up for autumn. It’s the best time of year right now. Now we’re just relaxing and enjoying life and reflecting.”During the 30-minute Saturday panel, Evans — who also spoke about his rescue dog Dodger and his work in the animal advocacy space — also addressed whether he’d consider returning to Broadway. The actor admitted he “very much so” would consider returning to the stage and is looking in terms of stage plays, but he hasn’t “quite found it yet.”“It has to be something that you are deeply passionate about, so I’m looking. I’d love to actually try and find something next year, but it’s tough because you’ll find something that you are kind of into that could be cool, but there’s just — like I said, once you’re in it, you are in,” he said. “Theater, they usually want three, four or five months. It’s got to be something that you don’t just love, but something that you’re ready to explore from different angles every single night for a very long time.” Evans shared that like many actors he started in high school theater, doing “a lot of Shakespeare,” with another notable Hollywood actor. “I went to high school and Jeremy strong — I don’t know if anyone knows that — and we both did a lot of Shakespeare shows together as teenagers,” Evans said. “With Jeremy Strong, I was just trying to keep up.” As for whether Evans would dip his toe into the musical space, he’s “not a good enough singer” to try it on the stage, but would consider it for the screen. “I could do a film musical because that you can do in a studio, and you can polish it until it’s right,” he said. “To get up there and just do it every day, eght times a week? I don’t have the pipes. I wish I did.”",
            img : "https://www.hollywoodreporter.com/wp-content/uploads/2023/10/Chris-Evans-NYCC-2023-Getty-H-2023.jpg?w=450&h=253&crop=1",
        
        },
        {
            id : 38,
            cat : 'hollywood',
            clap : "12k",
            date : "14-10-23",
            title : "Blake Lively and Ryan Reynolds Donate $1M to Support Children in Israel and Gaza (Exclusive)",
            desc : "Blake Lively and Ryan Reynolds are donating to yet another cause.The couple donated $1 million to the International Committee of the Red Cross (ICRC) on Friday “to help children in Israel and Gaza,” a source close to the pair told The Hollywood Reporter. They have four children and are adamant about sending financial aid to causes that are important to them.In the past, Lively and Reynolds matched up to $1 million in donations that were sent to the United Nations High Commissioner for Refugees after Russia invaded Ukraine, as well as $500,000 to Indigenous-focused safe water charity Water First Education & Training Inc. They also donated another $1 million split between Feeding America and Food Banks Canada, following the start of the COVID-19 pandemic.More recently, they donated $1 million to the SAG-AFTRA Foundation’s financial assistance program for performers facing economic hardship as the actors strike continues.On Oct. 7, the day of the Hamas terrorist attacks, the ICRC sent a truck of medical supplies to a hospital in Gaza, including body bags and stretchers. The organization is assessing the damage to sewage and water treatments, and trying to locate and gain access to the people who are being held hostage in order to establish contact with their families and medically treat them, per its website.Lively and Reynolds are the first celebrities to publicly provide financial aid to Israel and Gaza as the Israel-Hamas War rages on and the death toll continues to climb. On Saturday morning, Israel’s military announced it was preparing for the “next stages of the war” against Hamas, potentially including “strikes from the air, sea and land” and “significant ground operations,” according to CNN. Several celebrities have spoken out in support of the innocent victims of the war, including Jennifer Garner, Adam Sandler, Yara Shahidi, Kerry Washington and Martha Stewart.vg",
            img : "https://www.hollywoodreporter.com/wp-content/uploads/2023/10/Blake-Lively-Ryan-Reynolds-Getty-H-2023.jpg?w=450&h=253&crop=1",
        
        },
        {
            id : 39,
            cat : 'hollywood',
            clap : "12k",
            date : "14-10-23",
            title : "Jennifer Garner, Adam Sandler, Yara Shahidi Express Sympathy for in Israel-Hamas War: “People Are Not Their Government”",
            desc : "Jennifer Garner, Adam Sandler, Yara Shahidi and more celebrities shared heartfelt messages for innocent victims of the Israel–Hamas war amid increased violence taking place along the Gaza border since Saturday’s terrorist attack in Israel. The messages poured in as media reports noted that a former leader of Hamas called on supporters of the Palestinian terrorist group to take to the streets for a “Day of Rage.” Following the reports, SAG-AFTRA canceled its Friday pickets planned for New York City and Los Angeles, citing “potential safety concerns that are unrelated to our ongoing strike.” The Academy Museum gala, which was set to welcome an A-list roster of talent this Saturday, was also postponed “out of respect for the devastating conflict and loss of life happening overseas.”On Thursday, 700 major Hollywood figures signed an open letter in support of Israel, created by nonprofit Creative Community for Peace, condemning the attacks, requesting the return of hostages and calling on the entertainment community to refrain from sharing misinformation about the war. Gal Gadot, Jerry Seinfeld, Jamie Lee Curtis, Chris Pine, Mayim Bialik, Liev Schreiber, Amy Schumer and Michael Douglas were among the celebrities and execs who signed the letter.Others in Hollywood have continued to speak out on social media. Garner posted a lengthy message Friday morning on her Instagram, where she focused on the children being affected by the war, which she said is “unbearable to see.Sandler kept his message short but shared that he was “heartbroken by the horrendous attacks on Israel” and sent his love and sympathy to the families of the victims. “I pray for peace and the safety of innocent Israelis and Palestinians everywhere,” he concluded.”",
            img : "https://www.hollywoodreporter.com/wp-content/uploads/2023/10/Jennifer-Garner-Adam-Sandler-and-Yara-Shahidi-Split-getty-H-2023.jpg?w=450&h=253&crop=1",
        
        },
        {
            id : 40,
            cat : 'hollywood',
            clap : "12k",
            date : "14-10-23",
            title : "Dracula Origin Story Graphic Novel in the Works From Matt Wagner, Kelley Jones (Exclusive)",
            desc : "Dracula, one of the most popular horror creations in literature, continues to stoke the insatiable desire of fans over a century after he first flew out of the pages of Bram Stoker’s 1897 novel.The vampire lord’s bloody adventures have graced not just books but comics, films, TV shows and other media. But few have looked under the cape to see how the undead man became the fearsome legend that entranced readers.Now, just in time for Halloween, two veteran comic creators have teamed up to tell the story of how Dracula became Dracula.Matt Wagner, the indie creator behind Mage and Grendel, and also known for his Batman work, and artist Kelley Jones, whose macabre stylings evoke horror artist Bernie Wrightson, are crowdfunding a graphic novel trilogy exploring the lore of the vampire king. The books will be 112-page Gothic epics, with the first one titled Dracula — Book 1: The Impaler. The book launches on Kickstarter later this month, but you can sign up here for updates.“Our version of Dracula is bloody, sexy and monstrous,” Wagner tells The Hollywood Reporter in a statement. “This is very much a horror story, with deep roots in Stoker’s novel. But this isn’t yet another retelling of the novel in comics form. We’re bringing you the never-before told stories behind the story, the sinister tales hidden in the shadows of the original novel.”Impaler explores Dracula’s bloody history and his tenure at Satan’s legendary seminary of the dark arts, the Scholomance. The story reveals what led Dracula to seek out Satan’s tutelage and how he became the lord of the undead.",
            img : "https://www.hollywoodreporter.com/wp-content/uploads/2023/10/Dracula-Comic-NEW-Matt-Magner-Kelly-Jones-Split-Publicity-H-2023.jpg?w=1296&h=730&crop=1&resize=1000%2C563",
        
        },
        {
            id : 41,
            cat : 'hollywood',
            clap : "12k",
            date : "14-10-23",
            title : "Larry Charles to Release First Memoir",
            desc : "Larry Charles hasn’t taken it easy during Hollywood’s prolonged labor stoppage. The comedy icon, who just released his latest directorial effort (Dicks: The Musical), tells The Hollywood Reporter that he also just put the finishing touches on a memoir.Simon & Schuster recently purchased the book, with plans for a summer 2025 release. A description from the publisher describes it as “a memoir from one of the major influences on modern comedy (and Emmy, Golden Globe, and Peabody Award-winner), detailing his lifelong relationship with the craft, his work on iconic projects such as Seinfeld, Curb Your Enthusiasm and Borat, as well as highlighting collaborations with everyone from Mel Brooks to Bob Dylan to Bill Maher to Megan Thee Stallion and Bowen Yang.”Though currently untitled, Charles shared one idea during a recent wide-ranging interview: Life is But a Joke, from the Bob Dylan song “All Along the Watchtower.” (Dylan is another collaborator of Charles’, co-writing Charles’ 2023 movie Masked and Anonymous.) After a stint joke-writing in 1970s Los Angeles, Charles quickly made a name for himself in the comedy world — first teaming with Larry David on sketch comedy series Fridays before going on to write for Seinfeld and direct Curb Your Enthusiasm. Directing proved to be a smart pivot, as he famously helmed Sacha Baron Cohen films Borat and Brüno. A24’s Dicks: The Musical is currently in theaters.This is not Charles’ first book. In 1988, he and the late Richard Belzer teamed up for the comical self-help guide How to Be a Stand-Up Comic.The deal was brokered by UTA co-head of publishing Byrd Leavell and is for TMR",
            img : "https://www.hollywoodreporter.com/wp-content/uploads/2023/10/Larry-Charles-Dicks-Musical-Premiere-GettyImages-1689788771-H-2023.jpg?w=450&h=253&crop=1",
        
        },
        {
            id : 42,
            cat : 'hollywood',
            clap : "12k",
            date : "14-10-23",
            title : "Disney Donates $2M to Support Humanitarian Relief in Israel After Hamas Attack",
            desc : "The Walt Disney Co. is donating $2 million to humanitarian relief efforts in Israel following the devastating terror attacks that hit the country over the weekend. The company is donating $1 million to Magen David Adom, an affiliate of the International Federation of Red Cross and Red Crescent Societies that provides emergency medical and blood banking services in Israel. It is also donating $1 million to other nonprofit organizations working in the region, particularly those with a focus on providing aid to children. Disney revealed that company employees have also been participating in Disney’s Matching Gifts program that matches eligible charitable donations made by employees up to $25,000. “In the wake of the horrific terrorist attacks targeting Jews in Israel this past weekend, we must all do what we can to support the innocent people experiencing so much pain, violence, and uncertainty — particularly children,” Disney CEO Bob Iger said in a statement. “We condemn these attacks, the hate that motivated them, and all acts of terrorism, and we will continue working to find more ways to provide support in the region, and to honor the victims, their families, and all those affected by this war.” Earlier Thursday, Paramount Global donated $1 million to humanitarian relief efforts led by Magen David Adom, NATAL, UJA-Federation of New York and Save the Children. Paramount will also match employee donations to efforts to alleviate suffering in the region.",
            img : "https://www.hollywoodreporter.com/wp-content/uploads/2023/10/Bob-Iger.jpeg?w=450&h=253&crop=1",
        
        },
        {
            id : 43,
            cat : 'hollywood',
            clap : "12k",
            date : "14-10-23",
            title : "Michelle Williams to Narrate Britney Spears‘ Memoir ‘The Woman in Me’",
            desc : "Michelle Williams has been tapped to narrate the audio version of Britney Spears‘ tell-all memoir The Woman in Me.Spears will read the book’s introduction before passing it over to The Fabelmans star. “This book has been a labor of love and all the emotions that come with it,” the Baby One More Time singer said in a statement. “Reliving everything has been exciting, heart-wrenching, and emotional, to say the least. For those reasons, I will only be reading a small part of my audiobook. I am so grateful to the amazing Michelle Williams for reading the rest of it.”The five-time Oscar-nominated actress said, “I stand with Britney.” This is the first audiobook Williams, who has starred in Manchester by the Sea, My Week with Marilyn, Blue Valentine and Fosse/Verdon, has narrated. The Woman in Me, which was written with “candor and humor” is described as a “brave and astonishingly moving story about freedom, fame, motherhood, survival, faith and hope.” It also “illuminates the enduring power of music and love — and the importance of a woman telling her own story, on her own terms, at last.” In the book, Spears discusses her 13-year conservatorship and how the case impacted her personally and publicly. In November 2021, a Los Angeles County judge ruled to terminate the conservatorship after the singer testified in court months prior that it was abusive and that it was her “wish and my dream for this to end.” The memoir, which was previously reported to be worth as much as $15 million, was acquired by Gallery Books following a bidding war involving several publishers. The Woman in Me will hit bookshelves on Oct. 24.",
            img : "https://www.hollywoodreporter.com/wp-content/uploads/2023/10/Michelle-Williams-and-Britney-Spears-Split-Getty-H-2023.jpg?w=450&h=253&crop=1",
        
        },

        {
            id : 45,
            cat : 'technology',
            clap : "12k",
            date : "14-10-23",
            title : "Exoskeleton allows wheelchair user to walk",
            desc : "People who use wheelchairs may one day be able to walk with the help of this Atalante X exoskeleton.Made by French firm Wandercraft, it supports people in a standing position and is controlled with a hand-held device. It can currently only be used inside hospitals, but the company plans to make future versions that could be used anywhere.Raphael uses a wheelchair because of a spinal cord injury, and he has rehabilitation sessions in the exoskeleton to improve his core muscle strength. Some clinics use the exoskeleton to help people relearn to walk after a stroke, where it aids them in regaining strength and balance.Last week, a new research programme began to investigate the exoskeleton’s effectiveness at helping people with spinal cord injuries and motor neuron disease.",
            img : "https://images.newscientist.com/wp-content/uploads/2023/10/19103709/wandercraft-video-page.jpg?width=920",
        
        },
        {
            id : 46,
            cat : 'technology',
            clap : "12k",
            date : "14-10-23",
            title : "The 2023 Nobel prizes honour work that touched millions of lives",
            desc : "he committees which award the Nobel prizes are hard to second-guess. Last year, for instance, the prize in physiology or medicine went to Svante Paabo, a pioneer of the study of fossil dna, which has shed much light on human evolution.A worthy winner. But some thought the choice an odd one in light of the covid-19 pandemic that had ravaged the world. This year the Karolinska Institute in Stockholm, which awards the prize, made amends. It awarded it to Katalin Karikó and Drew Weissman, who, working at the University of Pennsylvania, helped pioneer the mrna vaccines that were deployed, in record time, against the coronavirus. It was they who worked out how to stop the molecule at the heart of such vaccines provoking a reaction which would otherwise have made them unusable.",
            img : "https://www.economist.com/cdn-cgi/image/width=960,quality=80,format=auto/media-assets/image/20231007_STD001.jpg",
        
        },
        {
            id : 47,
            cat : 'technology',
            clap : "12k",
            date : "14-10-23",
            title : "A flying car that anyone can use will soon go on sale",
            desc : "Electrically powered vertical-take-off-and-landing (evtol) aircraft—flying cars, to the layman—are an idea whose time has not quite yet come, but is fast approaching. Many firms are jostling with each other, offering designs that range from scaled-up multirotor drones, via things which resemble rigid spiders’ webs, to fixed-wing/helicopter hybrids. None of these, however, will be Jetson-like family saloons with dad (or even mum) at the controls. Those flying them will require a pilot’s licence. Most will probably be used initially as sky-going taxis.One company has, by contrast, stuck to its guns and carried through its original project to create something which people can purchase and pilot themselves. Helix is a single-seat vehicle, so “flying motorbike” might be a more accurate appellation. It has, however, been carefully crafted by its maker, Pivotal, based in Silicon Valley, to be within America’s rules for microlight aircraft. That means anyone, pilot’s licence or not, can fly it over non-built-up areas. As a result, from next year those with $190,000 stuffed down the back of the sofa will be able to order one for personal use—though they will not be able to take delivery until June.",
            img : "https://www.economist.com/cdn-cgi/image/width=960,quality=80,format=auto/content-assets/images/20231014_STD003.jpg",
        
        },
        {
            id : 48,
            cat : 'technology',
            clap : "12k",
            date : "14-10-23",
            title : "Google claims data-scraping lawsuit threatens generative AI progress",
            desc : "Google has asked a California federal court to dismiss a class action lawsuit that claims the company’s scraping of data to train generative AI systems infringes millions of people’s privacy and property rights.Google’s argument is that using available public data is essential to training systems like its own Bard, adding that the lawsuit would ‘take a sledgehammer not just to Google’s services but to the very idea of generative AI.’ In July, eight individuals filed a case in San Francisco accusing Google of illegally using content from social media and Google platforms to train AI, including photos on dating websites, Spotify playlists, and TikTok videos.In a statement on Tuesday, Google general counsel Halimah DeLaine Prado argued that the lawsuit was ‘baseless’ and that US law ‘supports using public information to create beneficial uses.’ Google added that ‘using publicly available information to learn is not stealing’ and that it cannot be considered a copyright infringement, invasion of privacy, negligence, or unfair competition.Google claims that the complaint fails to address any core issues, particularly how the company could have abused the plaintiffs by using their content. This case is part of a wider string of legal cases facing tech companies over generative AI, including several pending US lawsuits.Since these models use massive amounts of data from the internet for training, most cases revolve around the misuse of content without approval, including personal information, books, and visual art.Mounting legal issues could hinder the development and adoption of the technology, not just for Google but across the industry. The outcomes of these early generative AI cases are still unclear, but preliminary indications suggest that courts are approaching generative AI claims with a healthy level of scepticism.",
            img : "https://diplo-media.s3.eu-central-1.amazonaws.com/2023/09/users-united-by-one-technological-network-with-social-network-google-3d-1024x539.jpg",
        
        },
        {
            id : 49,
            cat : 'technology',
            clap : "12k",
            date : "14-10-23",
            title : "Meta commissions a sevenfold takedown of content about the Israel-Hamas conflict",
            desc : "After the October 7 attacks by Hamas on Israel, Meta has removed over 700,000 pieces of content deemed to violate established policies. According to the company, posts written on Facebook and Instagram by Hamas, labeled a terrorist organisation by several Western governments, are considered in contravention of its Dangerous Organisations and Individuals Policy. Yet, despite the group being banned from posting on these platforms, Meta continues to remove hundreds of thousands of posts in praise or support of Hamas. Three days following the October 7 attack, these posts numbered close to 800,000, seven times the removal rate just two months prior. Meta has also ramped up its defenses by establishing:A special operations centre staffed with linguists versed in Arabic and Hebrew.Stronger steps to prevent the posting of violent content in the first place.An expansion of the Violence and Incitement Policy to prioritise the safety of hostages.Restricted access to specific hashtags associated with violent contentBlurring of the face of victims posted on the platforms. Other platforms like X took similar actions in the wake of a call for greater platform moderation from organisations such as the European Union, the Arab Centre for the Advancement of Social Media, and the Anti-Defamation League. Conversely, the Association for Progressive Communications decried the heavy-handed approach to censoring Palestinians’ speech.  Why does it matter?Meta’s swift and decisive action amidst this crisis is well noted, given the pummelling the platform operator faced for its role in the promotion of disinformation, misinformation, and hate speech during other offline conflicts. ",
            img : "https://diplo-media.s3.eu-central-1.amazonaws.com/2023/08/businesswoman-with-metaverse-word-cyberspace-1024x683.jpg",
        
        },
        {
            id : 50,
            cat : 'technology',
            clap : "12k",
            date : "14-10-23",
            title : "Mixed reviews on Japan’s Digital ID system as failures prevail",
            desc : "The My Number digital ID system, an IC chip that was launched in 2016 to ensure that everyone, from babies to the elderly, has access to the benefits that come with digital transformation in Japan, continues to face several problems. During the initial phases of the digital ID system, issues include low uptake due to data privacy fears, service access limitations, and a lengthy wait time to replace the access PIN or the card itself. In recent times, users have complained of an inability to access the digital certificates linked to the digital IDs, failings with renewals, the wrong linking of IDs to bank accounts and administrative records, and a lack of inter-agency communication. As the government works feverishly to solve the ongoing setbacks with the My Number ID system, public opinion point to the need for greater and deeper sensitisation on the project as being at the heart of the problems. Why does it matter? The issues with the My Number ID system could not have surfaced worse for the Kono government as the time nears its June 2024 target to eliminate analogue regulations, an estimated 3.6 trillion yen undertaking. ",
            img : "https://diplo-media.s3.eu-central-1.amazonaws.com/2023/07/z8jc-xntrgg-1-1024x683.jpg",
        
        },
        {
            id : 51,
            cat : 'technology',
            clap : "12k",
            date : "14-10-23",
            title : "Australian banks turn to private digital IDs as the national scheme faces challenges",
            desc : "Australia is amid an ongoing debate over new laws that could finally bring the country’s national digital identity scheme to fruition. As progress on the national digital ID plan remains slow, financial institutions seek alternative solutions and turn to private identity services. The Commonwealth Bank of Australia (CBA), one of the country’s largest banks, has recently partnered with ConnectID. This digital identity service enables users to prove their identity online to businesses and merchants. This development follows the National Bank of Australia (NAB), which previously allowed customers to access ConnectID. CBA plans to utilize ConnectID to allow its customers to verify their identity using face biometrics through the CBA app.ConnectID is a product of collaboration between AP+ (Australian Payments Plus), Eftpos (a digital identity solutions company), BPAY (a payments platform), and the New Payments Platform (NPP), a subsidiary of AP+. It is designed as an alternative to government digital ID schemes, primarily aimed at consumers. The service features data minimization as one of its essential aspects. Why does it matter? ConnectID is the first non-government operator accredited by the Australian government under the Trusted Digital Identity Framework (TDIF) to provide digital identity exchange services in the country. The federal government has actively encouraged private sector participation in the TDIF since 2018. However, the latest move suggests that banks may be growing impatient with government schemes. Experts in the field warn against the rushed passage of the Identity Verification Services Bill 2023, which aims to regulate identity verification services and establish the foundation for the country’s upcoming digital identity ecosystem, alongside other forthcoming laws, such as the draft Digital ID Bill.",
            img : "https://diplo-media.s3.eu-central-1.amazonaws.com/2023/08/finger-scan-icon-appeared-while-man-s-finger-touched-futuristic-transparent-glass-smart-mobile-phone-dark-background-cyber-security-data-protection-business-privacy-technology-concept-1024x566.jpg",
        
        },
        {
            id : 52,
            cat : 'technology',
            clap : "12k",
            date : "14-10-23",
            title : "Amazon to launch online shopping service in South Africa from 2024",
            desc : "Amazon has announced its plans to launch its online shopping service in South Africa, making it the second African country, after Egypt, where the U.S. e-commerce giant will operate. Amazon, in its statement, revealed that the introduction of ‘Amazon.co.za’ in 2024 aims to provide independent sellers across the country with an opportunity to quickly establish, expand, and grow their businesses.While South Africa is often seen as a gateway for companies looking to expand into the continent, analysts predict that the launch may not significantly disrupt the local industry or be a game-changer for Amazon due to existing challenges such as weak economic growth, high unemployment, and infrastructure issues. But it will surely intensify competition. Takealot, a major player in the South African online retail market, has expressed confidence in competing with Amazon, given its extensive delivery network and prevailing local appeal.Meanwhile, the configuration of Amazon’s platform in compliance with local competition regulations, which require the separation of retail operations from marketplace activities, is yet to be determined. Nevertheless, sellers can now register to sell on the platform.",
            img : "https://diplo-media.s3.eu-central-1.amazonaws.com/2023/09/Amazon-and-Anthropic.png",
        
        },
        {
            id : 53,
            cat : 'technology',
            clap : "12k",
            date : "14-10-23",
            title : "ESMA urges preparations for smooth transition to MiCA regulation.",
            desc : "The European Securities and Markets Authority (ESMA), the financial markets regulator and supervisor of the EU, has issued a letter and a statement urging preparations for a seamless transition to the Markets in Crypto-assets Regulation (MiCA).In the letter addressed to the Economic and Financial Affairs Council (ECOFIN), Verena Ross, ESMA Chair, emphasises the need for Member States to promptly designate the competent authorities responsible for implementing the functions and duties outlined in the EU regulation. This is crucial to ensuring effective regulation and supervision of the crypto-asset market.Furthermore, ESMA has released a statement addressing entities that provide crypto-asset services and the national competent authorities that will be responsible for their supervision. The statement sets out the expectations for both parties during the transitional period of MiCA. The EU’s financial watchdog urges the competent authorities to allocate resources and align their supervisory practices with those of their EU counterparts, in order to establish effective supervision from the start.Market participants are strongly encouraged to initiate preparations for a smooth transition and ensure that their clients are informed about the regulatory status of their crypto-asset offerings. ESMA also emphasises the importance of market participants understanding the implications of the “grandfathered” status of their offerings and informing consumers about the risks associated with holding or investing in crypto-assets. This reminder aims to protect consumers and ensure they make informed decisions during the transitional period. Why does it matter? By taking these measures, ESMA aims to establish effective regulation and supervision of the crypto-asset market, safeguarding both market participants and consumers. The initiative reflects ESMA’s commitment to creating a well-regulated market for crypto-assets within the European Union.",
            img : "https://diplo-media.s3.eu-central-1.amazonaws.com/2023/10/EU-ESMA-Logo.jpg",
        
        },
        {
            id : 54,
            cat : 'technology',
            clap : "12k",
            date : "14-10-23",
            title : "Basel committee proposes full disclosure of banks’ cryptocurrency holdings",
            desc : "According to recently proposed plans of the Basel Committee on Banking Supervision, which establishes standards for traditional finance institutions, banks will be required to fully disclose their cryptocurrency holdings. This move comes as international regulators attribute some banking collapses to the rapid rise in the popularity of cryptocurrencies.The Committee had previously recommended that banks should allocate sufficient capital to account for their holdings of unsupported cryptocurrencies like bitcoin (BTC) or ether (ETH). The new disclosure obligations for banks’ crypto-asset exposure will complement the existing capital requirements for digital assets.In a report released on Thursday, the Committee outlined its perspective on what it referred to as the ‘most noteworthy system-wide banking stress’ since the 2008 financial crisis, with cryptocurrency being targeted. The surge in popularity of cryptocurrency was identified as one of three underlying trends indirectly contributing to the financial disruption in traditional finance that occurred in March, along with the expansion of non-bank financial intermediation and the emergence of faster digital payment systems enabling rapid depositor withdrawals.About the Basel Committee on Banking Supervision. The Basel Committee on Banking Supervision is an international committee of banking supervisory authorities established by the central bank governors of the Group of Ten countries in 1974. Its objective is to enhance understanding of key supervisory issues and improve the quality of banking supervision worldwide. The committee frames guidelines and standards in different areas – some of the better known among them are the international standards on capital adequacy, the Core Principles for Effective Banking Supervision and the Concordat on cross-border banking supervision. The committee is made up of central banks and other banking regulatory authorities from 28 jurisdictions and has 45 members.",
            img : "https://diplo-media.s3.eu-central-1.amazonaws.com/2023/09/bitcoins-ladder-chart-cryptocurrency-concept-1024x683.jpg",
        
        },
        {
            id : 55,
            cat : 'hollywood',
            clap : "12k",
            date : "14-10-23",
            title : "Sam Altman’s crypto venture Worldcoin facing ban in Kenya over legal and safety issues",
            desc : "A Kenyan parliamentary panel has recommended the shutdown of Worldcoin in the country due to concerns about the ‘authenticity and legality’ of its operations in the digital identity, financial services, and data security domains. An ad hoc committee of 18 legislators was set up in August to scrutinise the activities of Worldcoin, Sam Altman’s crypto venture. The lawmakers called on Kenya’s ICT regulator, the Communication Authority, to ban Worldcoin’s physical and virtual presence, including blocking the IP addresses of related websites, until relevant rules on digital assets are in place in the country. The panel also urged the government to immediately take action and launch criminal probes into ‘Tools for Humanity Corp’, a company co-founded by OpenAI CEO Sam Altman to produce Worldcoin, and its Kenyan partners, including Sense Marketing. The report should be presented and discussed soon at the Kenyan National Assembly.Why does it matter? The lawmaker’s report highlights several pending issues with digital identity and data privacy in the crypto industry. The recommendations come as Kenya ordered Worldcoin to stop all registration in the country in early August as a result of complaints about Worldcoin’s biometric scan of users’ iris in exchange for a digital ID linked to a new ‘identity and financial network’. In total disregard for the government’s order, Worldcoin kept on collecting Kenya’s residents’ personal data virtually, with no age verification process. In addition to the shutdown of the operation, the recommendations include: ‘implementing a comprehensive framework for digital assets and virtual asset service providers; amending existing regulations to consider cybercrimes and tax reporting requirements; and providing a requirement for full disclosure on how companies will utilize and store personal and sensitive data collected in Kenya.’ Worldcoin has also come under the radar of British, German, and French regulators. A shutdown would restrict Worldcoin’s development plans and could impact its reputation, set a precedent, and inspire other countries to follow Kenya’s legislative action.",
            img : "https://diplo-media.s3.eu-central-1.amazonaws.com/2023/07/world-ID.jpg",
        }
    ])
    return (
        <>
            <bucket.Provider value={[data, setData]}>
                {props.children}
            </bucket.Provider>
        </>
    )
}