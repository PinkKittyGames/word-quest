const WORDS = [
  {
    "word": "wander",
    "zh": "漫步；闲逛",
    "example": "I like to wander around the city when I have free time.",
    "exampleZh": "我喜欢有空的时候在城市里到处逛逛。"
  },
  {
    "word": "curious",
    "zh": "好奇的",
    "example": "She was curious about what was inside the box.",
    "exampleZh": "她很好奇盒子里面是什么。"
  },
  {
    "word": "awkward",
    "zh": "尴尬的；笨拙的",
    "example": "There was an awkward silence after his question.",
    "exampleZh": "他问完问题后出现了一阵尴尬的沉默。"
  },
  {
    "word": "relieved",
    "zh": "如释重负的；宽慰的",
    "example": "I felt relieved when I found my lost wallet.",
    "exampleZh": "找到丢失的钱包后，我松了一口气。"
  },
  {
    "word": "hesitate",
    "zh": "犹豫",
    "example": "Do not hesitate to ask if you need help.",
    "exampleZh": "如果你需要帮助，不要犹豫，尽管开口。"
  },
  {
    "word": "delight",
    "zh": "高兴；使愉快",
    "example": "The little gift brought her great delight.",
    "exampleZh": "这份小礼物给她带来了很大的快乐。"
  },
  {
    "word": "ordinary",
    "zh": "普通的；平凡的",
    "example": "It looked like an ordinary day at first.",
    "exampleZh": "一开始，那看起来只是普通的一天。"
  },
  {
    "word": "notice",
    "zh": "注意到；留意",
    "example": "Did you notice the change in his voice?",
    "exampleZh": "你注意到他的声音有什么变化吗？"
  },
  {
    "word": "improve",
    "zh": "改善；提高",
    "example": "Reading every day can improve your English.",
    "exampleZh": "每天阅读可以提高你的英语。"
  },
  {
    "word": "confident",
    "zh": "自信的",
    "example": "She became more confident after practising.",
    "exampleZh": "练习之后，她变得更加自信。"
  },
  {
    "word": "peculiar",
    "zh": "奇怪的；独特的",
    "example": "There was a peculiar smell in the room.",
    "exampleZh": "房间里有一股奇怪的味道。"
  },
  {
    "word": "appreciate",
    "zh": "欣赏；感激",
    "example": "I really appreciate your help.",
    "exampleZh": "我真的很感谢你的帮助。"
  },
  {
    "word": "destination",
    "zh": "目的地",
    "example": "We finally arrived at our destination.",
    "exampleZh": "我们终于到达了我们的目的地。"
  },
  {
    "word": "genuine",
    "zh": "真正的；真诚的",
    "example": "Her smile looked completely genuine.",
    "exampleZh": "她的笑容看起来非常真诚。"
  },
  {
    "word": "fortunate",
    "zh": "幸运的",
    "example": "I was fortunate enough to meet good friends.",
    "exampleZh": "我很幸运能够遇到好朋友。"
  },
  {
    "word": "eventually",
    "zh": "最终；终于",
    "example": "He eventually found the answer.",
    "exampleZh": "他最终找到了答案。"
  },
  {
    "word": "approach",
    "zh": "接近；方法",
    "example": "Winter is approaching quickly.",
    "exampleZh": "冬天很快就要来了。"
  },
  {
    "word": "distract",
    "zh": "使分心",
    "example": "Music helps me when I need to focus and avoid distractions.",
    "exampleZh": "当我需要专心时，音乐能帮助我避免分心。"
  },
  {
    "word": "remarkable",
    "zh": "非凡的；值得注意的",
    "example": "She made remarkable progress in a short time.",
    "exampleZh": "她在短时间内取得了显著的进步。"
  },
  {
    "word": "event",
    "zh": "事件；活动",
    "example": "The school organised a special event.",
    "exampleZh": "学校举办了一场特别的活动。"
  },
  {
    "word": "actually",
    "zh": "实际上",
    "example": "I actually enjoyed the quiet afternoon.",
    "exampleZh": "其实我很享受那个安静的下午。"
  },
  {
    "word": "adventure",
    "zh": "冒险；奇遇",
    "example": "The trip turned into a small adventure.",
    "exampleZh": "这趟旅行变成了一次小冒险。"
  },
  {
    "word": "afford",
    "zh": "负担得起",
    "example": "I cannot afford a new phone right now.",
    "exampleZh": "我现在负担不起新手机。"
  },
  {
    "word": "ancient",
    "zh": "古老的",
    "example": "We visited an ancient temple.",
    "exampleZh": "我们参观了一座古老的寺庙。"
  },
  {
    "word": "anxious",
    "zh": "焦虑的；担心的",
    "example": "She felt anxious before the interview.",
    "exampleZh": "她面试前感到有些焦虑。"
  },
  {
    "word": "apologize",
    "zh": "道歉",
    "example": "I should apologize for being late.",
    "exampleZh": "我应该为迟到道歉。"
  },
  {
    "word": "arrange",
    "zh": "安排；整理",
    "example": "We arranged the chairs in a circle.",
    "exampleZh": "我们把椅子围成了一圈。"
  },
  {
    "word": "attempt",
    "zh": "尝试",
    "example": "He made another attempt to solve the puzzle.",
    "exampleZh": "他又尝试了一次解决这个谜题。"
  },
  {
    "word": "avoid",
    "zh": "避免",
    "example": "I try to avoid using my phone before bed.",
    "exampleZh": "我尽量避免睡前玩手机。"
  },
  {
    "word": "balance",
    "zh": "平衡",
    "example": "It is important to balance work and rest.",
    "exampleZh": "平衡工作和休息很重要。"
  },
  {
    "word": "barely",
    "zh": "勉强；几乎不",
    "example": "I could barely hear the announcement.",
    "exampleZh": "我几乎听不清那个通知。"
  },
  {
    "word": "benefit",
    "zh": "益处；受益",
    "example": "Walking can benefit your health.",
    "exampleZh": "散步对健康有益。"
  },
  {
    "word": "brief",
    "zh": "短暂的；简短的",
    "example": "We had a brief conversation.",
    "exampleZh": "我们进行了简短的交谈。"
  },
  {
    "word": "calm",
    "zh": "平静的",
    "example": "The lake looked calm in the morning.",
    "exampleZh": "早晨的湖面看起来很平静。"
  },
  {
    "word": "capture",
    "zh": "捕捉；记录",
    "example": "She used her camera to capture the sunset.",
    "exampleZh": "她用相机记录下了日落。"
  },
  {
    "word": "casual",
    "zh": "随意的；休闲的",
    "example": "He wore casual clothes to the picnic.",
    "exampleZh": "他穿着休闲服去野餐。"
  },
  {
    "word": "celebrate",
    "zh": "庆祝",
    "example": "We went out to celebrate her birthday.",
    "exampleZh": "我们出去庆祝她的生日。"
  },
  {
    "word": "certain",
    "zh": "确定的；某个",
    "example": "I am certain that I locked the door.",
    "exampleZh": "我确定自己锁了门。"
  },
  {
    "word": "challenge",
    "zh": "挑战",
    "example": "Learning a new skill can be a fun challenge.",
    "exampleZh": "学习新技能可以是一个有趣的挑战。"
  },
  {
    "word": "charming",
    "zh": "迷人的",
    "example": "The little café has a charming atmosphere.",
    "exampleZh": "那家小咖啡馆有迷人的氛围。"
  },
  {
    "word": "cheerful",
    "zh": "愉快的；开朗的",
    "example": "She always sounds cheerful in the morning.",
    "exampleZh": "她早上说话总是很愉快。"
  },
  {
    "word": "comfortable",
    "zh": "舒服的；舒适的",
    "example": "These shoes are comfortable enough for walking.",
    "exampleZh": "这双鞋舒服得可以穿去散步。"
  },
  {
    "word": "complicated",
    "zh": "复杂的",
    "example": "The instructions looked more complicated than expected.",
    "exampleZh": "说明看起来比想象中复杂。"
  },
  {
    "word": "convenient",
    "zh": "方便的",
    "example": "The shop is in a convenient location.",
    "exampleZh": "那家店的位置很方便。"
  },
  {
    "word": "cozy",
    "zh": "舒适温馨的",
    "example": "The room feels cozy on rainy days.",
    "exampleZh": "下雨天这个房间感觉很温馨。"
  },
  {
    "word": "creative",
    "zh": "有创意的",
    "example": "She found a creative way to decorate the box.",
    "exampleZh": "她想出了一个有创意的方法装饰盒子。"
  },
  {
    "word": "crowded",
    "zh": "拥挤的",
    "example": "The train was crowded after work.",
    "exampleZh": "下班后火车很拥挤。"
  },
  {
    "word": "decide",
    "zh": "决定",
    "example": "I cannot decide what to eat.",
    "exampleZh": "我决定不了要吃什么。"
  },
  {
    "word": "describe",
    "zh": "描述",
    "example": "Can you describe the place to me?",
    "exampleZh": "你可以向我描述一下那个地方吗？"
  },
  {
    "word": "discover",
    "zh": "发现",
    "example": "We discovered a quiet café nearby.",
    "exampleZh": "我们发现附近有一家安静的咖啡馆。"
  },
  {
    "word": "eager",
    "zh": "渴望的；热切的",
    "example": "She was eager to try the new game.",
    "exampleZh": "她很想试试那个新游戏。"
  },
  {
    "word": "efficient",
    "zh": "高效的",
    "example": "This shortcut is a more efficient way to get there.",
    "exampleZh": "这条捷径是更高效的去法。"
  },
  {
    "word": "embarrassed",
    "zh": "尴尬的",
    "example": "I felt embarrassed when I forgot his name.",
    "exampleZh": "我忘记他的名字时觉得很尴尬。"
  },
  {
    "word": "encounter",
    "zh": "遇见；遭遇",
    "example": "We had an unexpected encounter at the mall.",
    "exampleZh": "我们在商场意外遇见了对方。"
  },
  {
    "word": "enormous",
    "zh": "巨大的",
    "example": "The museum has an enormous collection.",
    "exampleZh": "那座博物馆有大量的收藏。"
  },
  {
    "word": "entire",
    "zh": "整个的",
    "example": "I spent the entire afternoon reading.",
    "exampleZh": "我整个下午都在看书。"
  },
  {
    "word": "especially",
    "zh": "尤其",
    "example": "I like this café, especially its drinks.",
    "exampleZh": "我喜欢这家咖啡馆，尤其是它的饮料。"
  },
  {
    "word": "essential",
    "zh": "必要的；重要的",
    "example": "Sleep is essential for a good day.",
    "exampleZh": "睡眠对美好的一天很重要。"
  },
  {
    "word": "familiar",
    "zh": "熟悉的",
    "example": "Her voice sounded familiar.",
    "exampleZh": "她的声音听起来很熟悉。"
  },
  {
    "word": "flexible",
    "zh": "灵活的",
    "example": "My schedule is quite flexible this week.",
    "exampleZh": "我这周的时间安排比较灵活。"
  },
  {
    "word": "focus",
    "zh": "专注；重点",
    "example": "I need some quiet time to focus.",
    "exampleZh": "我需要一点安静的时间来专心。"
  },
  {
    "word": "fragrant",
    "zh": "芳香的",
    "example": "The tea has a light, fragrant smell.",
    "exampleZh": "这杯茶有淡淡的芳香。"
  },
  {
    "word": "frequent",
    "zh": "频繁的",
    "example": "He is a frequent visitor to this bookstore.",
    "exampleZh": "他经常来这家书店。"
  },
  {
    "word": "generous",
    "zh": "慷慨的",
    "example": "She was generous with her time.",
    "exampleZh": "她很愿意花时间帮助别人。"
  },
  {
    "word": "gentle",
    "zh": "温柔的；轻柔的",
    "example": "The breeze was gentle and cool.",
    "exampleZh": "微风轻柔而凉爽。"
  },
  {
    "word": "grateful",
    "zh": "感激的",
    "example": "I am grateful for your kindness.",
    "exampleZh": "我很感激你的善意。"
  },
  {
    "word": "gloomy",
    "zh": "阴沉的；忧郁的",
    "example": "The sky looked gloomy before the rain.",
    "exampleZh": "下雨前天空看起来阴沉沉的。"
  },
  {
    "word": "graceful",
    "zh": "优雅的",
    "example": "The dancer made a graceful turn.",
    "exampleZh": "舞者做了一个优雅的转身。"
  },
  {
    "word": "habit",
    "zh": "习惯",
    "example": "Reading before bed is a good habit.",
    "exampleZh": "睡前阅读是个好习惯。"
  },
  {
    "word": "helpful",
    "zh": "有帮助的",
    "example": "Her advice was very helpful.",
    "exampleZh": "她的建议很有帮助。"
  },
  {
    "word": "honest",
    "zh": "诚实的",
    "example": "Please be honest with me.",
    "exampleZh": "请对我诚实。"
  },
  {
    "word": "imagine",
    "zh": "想象",
    "example": "Can you imagine living by the sea?",
    "exampleZh": "你能想象住在海边吗？"
  },
  {
    "word": "impressive",
    "zh": "令人印象深刻的",
    "example": "The view from the hill was impressive.",
    "exampleZh": "山上的景色令人印象深刻。"
  },
  {
    "word": "independent",
    "zh": "独立的",
    "example": "She enjoys travelling independently.",
    "exampleZh": "她喜欢独立旅行。"
  },
  {
    "word": "inspire",
    "zh": "激励；启发",
    "example": "Her story inspired me to keep trying.",
    "exampleZh": "她的故事激励我继续努力。"
  },
  {
    "word": "interesting",
    "zh": "有趣的",
    "example": "We had an interesting conversation.",
    "exampleZh": "我们进行了一次有趣的谈话。"
  },
  {
    "word": "journey",
    "zh": "旅程",
    "example": "The journey took three hours.",
    "exampleZh": "这段旅程花了三个小时。"
  },
  {
    "word": "kindness",
    "zh": "善意；好心",
    "example": "A little kindness can brighten someone's day.",
    "exampleZh": "一点善意就能让某人的一天变得更美好。"
  },
  {
    "word": "lively",
    "zh": "活泼的；热闹的",
    "example": "The night market is lively at night.",
    "exampleZh": "夜市晚上很热闹。"
  },
  {
    "word": "lonely",
    "zh": "孤单的",
    "example": "He felt lonely in the new city.",
    "exampleZh": "他在新城市里感到孤单。"
  },
  {
    "word": "luxury",
    "zh": "奢侈；奢华",
    "example": "A quiet afternoon feels like a luxury sometimes.",
    "exampleZh": "有时一个安静的下午就像一种奢侈。"
  },
  {
    "word": "mature",
    "zh": "成熟的",
    "example": "She gave a mature response.",
    "exampleZh": "她给出了成熟的回应。"
  },
  {
    "word": "memorable",
    "zh": "难忘的",
    "example": "It was a memorable weekend.",
    "exampleZh": "那是一个难忘的周末。"
  },
  {
    "word": "mysterious",
    "zh": "神秘的",
    "example": "There was a mysterious note on the table.",
    "exampleZh": "桌上有一张神秘的纸条。"
  },
  {
    "word": "natural",
    "zh": "自然的",
    "example": "She has a natural way of making people laugh.",
    "exampleZh": "她很自然地就能逗人发笑。"
  },
  {
    "word": "neat",
    "zh": "整洁的；利落的",
    "example": "His desk is always neat.",
    "exampleZh": "他的桌子总是很整洁。"
  },
  {
    "word": "obvious",
    "zh": "明显的",
    "example": "The answer became obvious after a while.",
    "exampleZh": "过了一会儿答案就明显了。"
  },
  {
    "word": "patient",
    "zh": "耐心的",
    "example": "Thank you for being patient with me.",
    "exampleZh": "谢谢你对我有耐心。"
  },
  {
    "word": "peaceful",
    "zh": "平静的",
    "example": "The garden is peaceful in the morning.",
    "exampleZh": "花园早上很宁静。"
  },
  {
    "word": "pleasant",
    "zh": "愉快的；宜人的",
    "example": "We had a pleasant afternoon together.",
    "exampleZh": "我们一起度过了愉快的下午。"
  },
  {
    "word": "polite",
    "zh": "有礼貌的",
    "example": "It is polite to say thank you.",
    "exampleZh": "说谢谢是一种礼貌。"
  },
  {
    "word": "popular",
    "zh": "受欢迎的",
    "example": "This dessert is popular with visitors.",
    "exampleZh": "这款甜点很受游客欢迎。"
  },
  {
    "word": "practical",
    "zh": "实用的",
    "example": "This bag is small but practical.",
    "exampleZh": "这个包虽然小，但很实用。"
  },
  {
    "word": "precious",
    "zh": "珍贵的",
    "example": "Time with family is precious.",
    "exampleZh": "和家人在一起的时间很珍贵。"
  },
  {
    "word": "prepare",
    "zh": "准备",
    "example": "I need to prepare for tomorrow.",
    "exampleZh": "我需要为明天做准备。"
  },
  {
    "word": "prefer",
    "zh": "更喜欢",
    "example": "I prefer tea to coffee.",
    "exampleZh": "比起咖啡，我更喜欢茶。"
  },
  {
    "word": "probably",
    "zh": "可能；大概",
    "example": "She will probably arrive soon.",
    "exampleZh": "她大概很快就会到了。"
  },
  {
    "word": "progress",
    "zh": "进步；进展",
    "example": "You are making good progress.",
    "exampleZh": "你正在取得不错的进步。"
  },
  {
    "word": "quiet",
    "zh": "安静的",
    "example": "I found a quiet corner to read.",
    "exampleZh": "我找到一个安静的角落看书。"
  },
  {
    "word": "rare",
    "zh": "罕见的；稀有的",
    "example": "It is rare to see snow here.",
    "exampleZh": "在这里看到雪很少见。"
  },
  {
    "word": "realize",
    "zh": "意识到",
    "example": "I suddenly realized that I had forgotten my keys.",
    "exampleZh": "我突然意识到自己忘带钥匙了。"
  },
  {
    "word": "recommend",
    "zh": "推荐",
    "example": "Would you recommend this restaurant?",
    "exampleZh": "你会推荐这家餐厅吗？"
  },
  {
    "word": "refreshing",
    "zh": "清爽的",
    "example": "The cold drink was refreshing.",
    "exampleZh": "那杯冷饮很清爽。"
  },
  {
    "word": "reliable",
    "zh": "可靠的",
    "example": "She is a reliable friend.",
    "exampleZh": "她是一个可靠的朋友。"
  },
  {
    "word": "relax",
    "zh": "放松",
    "example": "I like to relax with music after work.",
    "exampleZh": "工作后我喜欢听音乐放松。"
  },
  {
    "word": "remind",
    "zh": "提醒",
    "example": "Please remind me to bring my umbrella.",
    "exampleZh": "请提醒我带雨伞。"
  },
  {
    "word": "replace",
    "zh": "替换；代替",
    "example": "We need to replace the old chair.",
    "exampleZh": "我们需要换掉那把旧椅子。"
  },
  {
    "word": "require",
    "zh": "需要；要求",
    "example": "This job requires good communication skills.",
    "exampleZh": "这份工作需要良好的沟通能力。"
  },
  {
    "word": "respect",
    "zh": "尊重",
    "example": "We should respect different opinions.",
    "exampleZh": "我们应该尊重不同的意见。"
  },
  {
    "word": "routine",
    "zh": "日常；惯例",
    "example": "A simple routine helps me stay organized.",
    "exampleZh": "简单的日常安排能帮助我保持有条理。"
  },
  {
    "word": "satisfy",
    "zh": "使满足",
    "example": "The meal was enough to satisfy my hunger.",
    "exampleZh": "这顿饭足以填饱我的肚子。"
  },
  {
    "word": "scenery",
    "zh": "风景",
    "example": "The mountain scenery was beautiful.",
    "exampleZh": "山里的风景很美。"
  },
  {
    "word": "sensible",
    "zh": "明智的；合理的",
    "example": "That sounds like a sensible choice.",
    "exampleZh": "那听起来是个明智的选择。"
  },
  {
    "word": "similar",
    "zh": "相似的",
    "example": "The two bags look similar.",
    "exampleZh": "这两个包看起来很相似。"
  },
  {
    "word": "simple",
    "zh": "简单的",
    "example": "Sometimes a simple plan works best.",
    "exampleZh": "有时候简单的计划最好。"
  },
  {
    "word": "sincere",
    "zh": "真诚的",
    "example": "Her apology sounded sincere.",
    "exampleZh": "她的道歉听起来很真诚。"
  },
  {
    "word": "skill",
    "zh": "技能",
    "example": "Cooking is a useful skill.",
    "exampleZh": "做饭是一项实用技能。"
  },
  {
    "word": "slightly",
    "zh": "稍微",
    "example": "The room is slightly warmer now.",
    "exampleZh": "房间现在稍微暖和了一点。"
  },
  {
    "word": "smooth",
    "zh": "顺利的；平滑的",
    "example": "Everything went smoothly today.",
    "exampleZh": "今天一切都进行得很顺利。"
  },
  {
    "word": "spacious",
    "zh": "宽敞的",
    "example": "The new room is bright and spacious.",
    "exampleZh": "新房间明亮又宽敞。"
  },
  {
    "word": "specific",
    "zh": "具体的",
    "example": "Can you give me a specific example?",
    "exampleZh": "你能给我一个具体的例子吗？"
  },
  {
    "word": "steady",
    "zh": "稳定的",
    "example": "She made steady progress.",
    "exampleZh": "她取得了稳定的进步。"
  },
  {
    "word": "struggle",
    "zh": "挣扎；艰难应对",
    "example": "I sometimes struggle to remember new words.",
    "exampleZh": "我有时很难记住新单词。"
  },
  {
    "word": "sudden",
    "zh": "突然的",
    "example": "There was a sudden change in the weather.",
    "exampleZh": "天气突然发生了变化。"
  },
  {
    "word": "suitable",
    "zh": "合适的",
    "example": "This book is suitable for beginners.",
    "exampleZh": "这本书适合初学者。"
  },
  {
    "word": "support",
    "zh": "支持",
    "example": "My friends always support me.",
    "exampleZh": "我的朋友总是支持我。"
  },
  {
    "word": "surprise",
    "zh": "惊喜；使惊讶",
    "example": "The gift was a lovely surprise.",
    "exampleZh": "这份礼物是一个可爱的惊喜。"
  },
  {
    "word": "tasty",
    "zh": "美味的",
    "example": "The noodles were really tasty.",
    "exampleZh": "那碗面真的很好吃。"
  },
  {
    "word": "thoughtful",
    "zh": "体贴的；周到的",
    "example": "That was a thoughtful gift.",
    "exampleZh": "那是一份很贴心的礼物。"
  },
  {
    "word": "tiny",
    "zh": "极小的",
    "example": "There was a tiny cat under the table.",
    "exampleZh": "桌子下面有一只小小的猫。"
  },
  {
    "word": "traditional",
    "zh": "传统的",
    "example": "We tried some traditional food.",
    "exampleZh": "我们尝试了一些传统食物。"
  },
  {
    "word": "unique",
    "zh": "独特的",
    "example": "Every place has its own unique character.",
    "exampleZh": "每个地方都有自己独特的特色。"
  },
  {
    "word": "unexpected",
    "zh": "意外的",
    "example": "We had an unexpected guest.",
    "exampleZh": "我们来了一个意外的客人。"
  },
  {
    "word": "unusual",
    "zh": "不寻常的",
    "example": "That is an unusual way to solve it.",
    "exampleZh": "那是一种不寻常的解决方法。"
  },
  {
    "word": "useful",
    "zh": "有用的",
    "example": "This phrase is useful in daily conversation.",
    "exampleZh": "这个短语在日常对话中很有用。"
  },
  {
    "word": "valuable",
    "zh": "有价值的；宝贵的",
    "example": "Your time is valuable.",
    "exampleZh": "你的时间很宝贵。"
  },
  {
    "word": "various",
    "zh": "各种各样的",
    "example": "The shop sells various snacks.",
    "exampleZh": "那家店卖各种各样的零食。"
  },
  {
    "word": "vivid",
    "zh": "生动的；鲜明的",
    "example": "She has a vivid memory of that day.",
    "exampleZh": "她对那天有很清晰的记忆。"
  },
  {
    "word": "wanderer",
    "zh": "漫游者",
    "example": "The story follows a young wanderer.",
    "exampleZh": "这个故事讲述一名年轻漫游者的经历。"
  },
  {
    "word": "wonder",
    "zh": "想知道；奇迹",
    "example": "I wonder what is inside.",
    "exampleZh": "我想知道里面是什么。"
  },
  {
    "word": "worthwhile",
    "zh": "值得的",
    "example": "The effort was worthwhile.",
    "exampleZh": "这些努力是值得的。"
  },
  {
    "word": "youthful",
    "zh": "年轻的；有朝气的",
    "example": "Her youthful energy filled the room.",
    "exampleZh": "她充满活力的气息感染了整个房间。"
  },
  {
    "word": "adapt",
    "zh": "适应",
    "example": "It took me time to adapt to the new routine.",
    "exampleZh": "我花了一些时间适应新的日常。"
  },
  {
    "word": "admire",
    "zh": "欣赏；钦佩",
    "example": "I admire her patience.",
    "exampleZh": "我很欣赏她的耐心。"
  },
  {
    "word": "affection",
    "zh": "喜爱；感情",
    "example": "The child showed affection for the puppy.",
    "exampleZh": "孩子表现出对小狗的喜爱。"
  },
  {
    "word": "alert",
    "zh": "警觉的",
    "example": "Stay alert when crossing the road.",
    "exampleZh": "过马路时要保持警觉。"
  },
  {
    "word": "amazing",
    "zh": "令人惊叹的",
    "example": "The sunset was amazing.",
    "exampleZh": "日落美极了。"
  },
  {
    "word": "ambitious",
    "zh": "有抱负的",
    "example": "She has ambitious plans for the future.",
    "exampleZh": "她对未来有很有抱负的计划。"
  },
  {
    "word": "announce",
    "zh": "宣布",
    "example": "They will announce the result tomorrow.",
    "exampleZh": "他们明天会公布结果。"
  },
  {
    "word": "appeal",
    "zh": "吸引力；呼吁",
    "example": "The quiet beach has a special appeal.",
    "exampleZh": "那片安静的海滩有特别的吸引力。"
  },
  {
    "word": "approve",
    "zh": "赞成；批准",
    "example": "Her parents approved of the plan.",
    "exampleZh": "她的父母赞成这个计划。"
  },
  {
    "word": "atmosphere",
    "zh": "氛围；气氛",
    "example": "The café has a relaxing atmosphere.",
    "exampleZh": "这家咖啡馆有轻松的氛围。"
  },
  {
    "word": "attitude",
    "zh": "态度",
    "example": "A positive attitude can help.",
    "exampleZh": "积极的态度会有所帮助。"
  },
  {
    "word": "attract",
    "zh": "吸引",
    "example": "Bright signs attract attention.",
    "exampleZh": "鲜艳的招牌很吸引注意力。"
  },
  {
    "word": "aware",
    "zh": "意识到的",
    "example": "I was not aware of the change.",
    "exampleZh": "我没有意识到这个变化。"
  },
  {
    "word": "belong",
    "zh": "属于",
    "example": "This notebook belongs to me.",
    "exampleZh": "这本笔记本属于我。"
  },
  {
    "word": "bother",
    "zh": "打扰；使烦恼",
    "example": "Sorry to bother you.",
    "exampleZh": "不好意思打扰你。"
  },
  {
    "word": "capable",
    "zh": "有能力的",
    "example": "You are capable of learning this.",
    "exampleZh": "你有能力学会这个。"
  },
  {
    "word": "cherish",
    "zh": "珍惜",
    "example": "We should cherish these moments.",
    "exampleZh": "我们应该珍惜这些时刻。"
  },
  {
    "word": "clarify",
    "zh": "澄清；说明",
    "example": "Could you clarify what you mean?",
    "exampleZh": "你可以说明一下你的意思吗？"
  },
  {
    "word": "combine",
    "zh": "结合",
    "example": "The recipe combines sweet and sour flavors.",
    "exampleZh": "这个食谱结合了酸甜两种味道。"
  },
  {
    "word": "communicate",
    "zh": "沟通",
    "example": "Good friends communicate honestly.",
    "exampleZh": "好朋友会坦诚沟通。"
  },
  {
    "word": "compare",
    "zh": "比较",
    "example": "It is useful to compare the two options.",
    "exampleZh": "比较这两个选择会很有帮助。"
  },
  {
    "word": "concentrate",
    "zh": "集中注意力",
    "example": "I need to concentrate on my work.",
    "exampleZh": "我需要集中注意力做我的工作。"
  },
  {
    "word": "consider",
    "zh": "考虑",
    "example": "I will consider your idea.",
    "exampleZh": "我会考虑你的想法。"
  },
  {
    "word": "contain",
    "zh": "包含",
    "example": "This box contains old photos.",
    "exampleZh": "这个盒子里有一些旧照片。"
  },
  {
    "word": "contribute",
    "zh": "贡献",
    "example": "Everyone can contribute an idea.",
    "exampleZh": "每个人都可以提出一个想法。"
  },
  {
    "word": "convince",
    "zh": "说服",
    "example": "She convinced me to try it.",
    "exampleZh": "她说服我试试看。"
  },
  {
    "word": "cooperate",
    "zh": "合作",
    "example": "The team needs to cooperate.",
    "exampleZh": "团队需要互相合作。"
  },
  {
    "word": "curiosity",
    "zh": "好奇心",
    "example": "Curiosity led her to open the book.",
    "exampleZh": "好奇心让她打开了那本书。"
  },
  {
    "word": "decent",
    "zh": "不错的；像样的",
    "example": "We found a decent place to eat.",
    "exampleZh": "我们找到了一家不错的吃饭地方。"
  },
  {
    "word": "delicate",
    "zh": "精致的；易损的",
    "example": "Be careful with the delicate glass.",
    "exampleZh": "小心那只易碎的玻璃杯。"
  },
  {
    "word": "depend",
    "zh": "取决于；依靠",
    "example": "It depends on the weather.",
    "exampleZh": "这取决于天气。"
  },
  {
    "word": "deserve",
    "zh": "值得",
    "example": "You deserve a good rest.",
    "exampleZh": "你值得好好休息一下。"
  },
  {
    "word": "determine",
    "zh": "决定；确定",
    "example": "The weather will determine our plans.",
    "exampleZh": "天气会决定我们的计划。"
  },
  {
    "word": "elegant",
    "zh": "优雅的",
    "example": "She chose an elegant dress.",
    "exampleZh": "她选了一件优雅的裙子。"
  },
  {
    "word": "encourage",
    "zh": "鼓励",
    "example": "My teacher encouraged me to keep writing.",
    "exampleZh": "老师鼓励我继续写下去。"
  },
  {
    "word": "enjoyable",
    "zh": "令人愉快的",
    "example": "The trip was simple but enjoyable.",
    "exampleZh": "这趟旅行很简单却很愉快。"
  },
  {
    "word": "enthusiastic",
    "zh": "热情的",
    "example": "He is enthusiastic about music.",
    "exampleZh": "他对音乐很有热情。"
  },
  {
    "word": "essentially",
    "zh": "本质上；基本上",
    "example": "The two ideas are essentially similar.",
    "exampleZh": "这两个想法本质上很相似。"
  },
  {
    "word": "exhausted",
    "zh": "筋疲力尽的",
    "example": "I felt exhausted after the long day.",
    "exampleZh": "忙了一整天后我感到筋疲力尽。"
  },
  {
    "word": "explore",
    "zh": "探索",
    "example": "We spent the afternoon exploring the old town.",
    "exampleZh": "我们花了一下午探索老城区。"
  },
  {
    "word": "express",
    "zh": "表达",
    "example": "It is important to express your feelings.",
    "exampleZh": "表达自己的感受很重要。"
  },
  {
    "word": "fascinating",
    "zh": "迷人的；引人入胜的",
    "example": "The history of the town is fascinating.",
    "exampleZh": "这座城镇的历史很有意思。"
  },
  {
    "word": "flexibility",
    "zh": "灵活性",
    "example": "This job offers some flexibility.",
    "exampleZh": "这份工作有一定的灵活性。"
  },
  {
    "word": "gather",
    "zh": "聚集；收集",
    "example": "We gathered around the table.",
    "exampleZh": "我们围坐在桌边。"
  },
  {
    "word": "gently",
    "zh": "轻轻地；温柔地",
    "example": "She gently closed the door.",
    "exampleZh": "她轻轻地关了门。"
  },
  {
    "word": "gradually",
    "zh": "逐渐地",
    "example": "Her English gradually improved.",
    "exampleZh": "她的英语逐渐进步了。"
  },
  {
    "word": "gracefully",
    "zh": "优雅地",
    "example": "The bird moved gracefully.",
    "exampleZh": "那只鸟优雅地移动着。"
  },
  {
    "word": "highlight",
    "zh": "亮点；突出",
    "example": "The dessert was the highlight of dinner.",
    "exampleZh": "甜点是晚餐的亮点。"
  },
  {
    "word": "ignore",
    "zh": "忽视",
    "example": "Try not to ignore the warning.",
    "exampleZh": "尽量不要忽视这个提醒。"
  },
  {
    "word": "incredible",
    "zh": "难以置信的；惊人的",
    "example": "The view was incredible.",
    "exampleZh": "景色令人难以置信地漂亮。"
  },
  {
    "word": "indicate",
    "zh": "表明",
    "example": "The sign indicates the entrance.",
    "exampleZh": "这个标志指示入口。"
  },
  {
    "word": "influence",
    "zh": "影响",
    "example": "Music can influence our mood.",
    "exampleZh": "音乐可以影响我们的心情。"
  },
  {
    "word": "insist",
    "zh": "坚持",
    "example": "She insisted on paying for dinner.",
    "exampleZh": "她坚持要付晚餐的钱。"
  },
  {
    "word": "intention",
    "zh": "意图；打算",
    "example": "I had no intention of hurting anyone.",
    "exampleZh": "我没有伤害任何人的意思。"
  },
  {
    "word": "interrupt",
    "zh": "打断",
    "example": "Sorry to interrupt you.",
    "exampleZh": "不好意思打断你。"
  },
  {
    "word": "involve",
    "zh": "涉及；包含",
    "example": "The project involves several people.",
    "exampleZh": "这个项目涉及几个人。"
  },
  {
    "word": "joyful",
    "zh": "快乐的",
    "example": "The room was filled with joyful laughter.",
    "exampleZh": "房间里充满了快乐的笑声。"
  },
  {
    "word": "maintain",
    "zh": "维持；保持",
    "example": "It is important to maintain a healthy routine.",
    "exampleZh": "保持健康的生活规律很重要。"
  },
  {
    "word": "mention",
    "zh": "提到",
    "example": "She mentioned your name yesterday.",
    "exampleZh": "她昨天提到了你的名字。"
  },
  {
    "word": "observe",
    "zh": "观察",
    "example": "I like to observe people at cafés.",
    "exampleZh": "我喜欢在咖啡馆观察人们。"
  },
  {
    "word": "occasion",
    "zh": "场合；时机",
    "example": "It was a special occasion.",
    "exampleZh": "那是一个特别的场合。"
  },
  {
    "word": "perspective",
    "zh": "观点；角度",
    "example": "Try to see it from another perspective.",
    "exampleZh": "试着从另一个角度看这件事。"
  },
  {
    "word": "possibility",
    "zh": "可能性",
    "example": "There is a possibility of rain.",
    "exampleZh": "有下雨的可能。"
  },
  {
    "word": "precisely",
    "zh": "准确地；恰好",
    "example": "That is precisely what I mean.",
    "exampleZh": "这正是我的意思。"
  },
  {
    "word": "preserve",
    "zh": "保存；保护",
    "example": "We should preserve local traditions.",
    "exampleZh": "我们应该保护当地传统。"
  },
  {
    "word": "pursue",
    "zh": "追求",
    "example": "She decided to pursue her creative interests.",
    "exampleZh": "她决定追求自己的创作兴趣。"
  },
  {
    "word": "realistic",
    "zh": "现实的；实际的",
    "example": "We need a realistic plan.",
    "exampleZh": "我们需要一个实际的计划。"
  },
  {
    "word": "recognize",
    "zh": "认出；意识到",
    "example": "I recognized her voice immediately.",
    "exampleZh": "我马上认出了她的声音。"
  },
  {
    "word": "reflect",
    "zh": "反映；思考",
    "example": "The lake reflected the mountains.",
    "exampleZh": "湖水倒映着群山。"
  },
  {
    "word": "relevant",
    "zh": "相关的",
    "example": "Please give me relevant information.",
    "exampleZh": "请给我相关的信息。"
  },
  {
    "word": "remarkably",
    "zh": "显著地",
    "example": "The weather was remarkably cool.",
    "exampleZh": "天气凉爽得很明显。"
  },
  {
    "word": "requirement",
    "zh": "要求；必要条件",
    "example": "English is one of the requirements.",
    "exampleZh": "英语是其中一项要求。"
  },
  {
    "word": "resource",
    "zh": "资源",
    "example": "The library is a useful resource.",
    "exampleZh": "图书馆是一个有用的资源。"
  },
  {
    "word": "respond",
    "zh": "回应",
    "example": "She responded with a smile.",
    "exampleZh": "她微笑着回应。"
  },
  {
    "word": "reward",
    "zh": "奖励；回报",
    "example": "The feeling of progress is its own reward.",
    "exampleZh": "进步的感觉本身就是一种回报。"
  },
  {
    "word": "sensitive",
    "zh": "敏感的",
    "example": "Some people are sensitive to strong smells.",
    "exampleZh": "有些人对强烈的气味很敏感。"
  },
  {
    "word": "significant",
    "zh": "重要的；显著的",
    "example": "There was a significant improvement.",
    "exampleZh": "有了明显的进步。"
  },
  {
    "word": "spontaneous",
    "zh": "自发的；即兴的",
    "example": "It was a spontaneous decision.",
    "exampleZh": "那是一个临时起意的决定。"
  },
  {
    "word": "stable",
    "zh": "稳定的",
    "example": "The situation is stable now.",
    "exampleZh": "现在情况稳定。"
  },
  {
    "word": "straightforward",
    "zh": "简单明了的",
    "example": "The instructions are straightforward.",
    "exampleZh": "说明很简单明了。"
  },
  {
    "word": "temporary",
    "zh": "暂时的",
    "example": "This is only a temporary arrangement.",
    "exampleZh": "这只是暂时的安排。"
  },
  {
    "word": "tend",
    "zh": "倾向于",
    "example": "I tend to drink tea in the afternoon.",
    "exampleZh": "我下午通常喜欢喝茶。"
  },
  {
    "word": "transform",
    "zh": "改变；转变",
    "example": "A little decoration can transform a room.",
    "exampleZh": "一点装饰就能改变一个房间。"
  },
  {
    "word": "trustworthy",
    "zh": "值得信赖的",
    "example": "She is honest and trustworthy.",
    "exampleZh": "她诚实而且值得信赖。"
  },
  {
    "word": "ultimately",
    "zh": "最终；归根结底",
    "example": "Ultimately, the choice is yours.",
    "exampleZh": "最终，选择权在你。"
  },
  {
    "word": "variety",
    "zh": "多样性；种类",
    "example": "The menu offers a variety of dishes.",
    "exampleZh": "菜单提供各种各样的菜。"
  },
  {
    "word": "whenever",
    "zh": "每当；无论何时",
    "example": "I listen to music whenever I need to relax.",
    "exampleZh": "每当我需要放松时就会听音乐。"
  },
  {
    "word": "wherever",
    "zh": "无论哪里",
    "example": "We can sit wherever you like.",
    "exampleZh": "你喜欢坐哪里都可以。"
  },
  {
    "word": "willing",
    "zh": "愿意的",
    "example": "She is willing to help.",
    "exampleZh": "她愿意帮忙。"
  },
  {
    "word": "wisdom",
    "zh": "智慧",
    "example": "Age does not always guarantee wisdom.",
    "exampleZh": "年龄并不总能代表智慧。"
  },
  {
    "word": "wonderful",
    "zh": "美好的；精彩的",
    "example": "We had a wonderful evening.",
    "exampleZh": "我们度过了一个美好的夜晚。"
  },
  {
    "word": "worth",
    "zh": "值得；价值",
    "example": "The place is worth visiting.",
    "exampleZh": "这个地方值得参观。"
  },
  {
    "word": "absorb",
    "zh": "吸收；理解",
    "example": "It takes time to absorb new information.",
    "exampleZh": "理解新信息需要时间。"
  },
  {
    "word": "access",
    "zh": "获得使用权；访问",
    "example": "You can access the dictionary from the menu.",
    "exampleZh": "你可以从菜单进入字典。"
  },
  {
    "word": "accurately",
    "zh": "准确地",
    "example": "Please write the name accurately.",
    "exampleZh": "请准确写下名字。"
  },
  {
    "word": "adjust",
    "zh": "调整；适应",
    "example": "You can adjust the settings later.",
    "exampleZh": "你之后可以调整设置。"
  },
  {
    "word": "admit",
    "zh": "承认",
    "example": "He admitted that he was wrong.",
    "exampleZh": "他承认自己错了。"
  },
  {
    "word": "affect",
    "zh": "影响",
    "example": "Weather can affect our plans.",
    "exampleZh": "天气会影响我们的计划。"
  },
  {
    "word": "analyze",
    "zh": "分析",
    "example": "We can analyze the results later.",
    "exampleZh": "我们可以之后分析结果。"
  },
  {
    "word": "appealing",
    "zh": "吸引人的",
    "example": "The design is simple but appealing.",
    "exampleZh": "这个设计简单但很吸引人。"
  },
  {
    "word": "assume",
    "zh": "假设；认为",
    "example": "Do not assume that everyone agrees.",
    "exampleZh": "不要认为每个人都同意。"
  },
  {
    "word": "briefly",
    "zh": "简短地",
    "example": "He briefly explained the plan.",
    "exampleZh": "他简短地解释了计划。"
  },
  {
    "word": "calculate",
    "zh": "计算",
    "example": "I used a calculator to calculate the total.",
    "exampleZh": "我用计算器计算总数。"
  },
  {
    "word": "capability",
    "zh": "能力",
    "example": "The phone has many useful capabilities.",
    "exampleZh": "这部手机有很多实用功能。"
  },
  {
    "word": "category",
    "zh": "类别",
    "example": "Choose a category from the menu.",
    "exampleZh": "从菜单选择一个类别。"
  },
  {
    "word": "clarity",
    "zh": "清晰；明确",
    "example": "The explanation needs more clarity.",
    "exampleZh": "这个解释需要更清楚一些。"
  },
  {
    "word": "commit",
    "zh": "投入；承诺",
    "example": "She decided to commit to daily practice.",
    "exampleZh": "她决定坚持每天练习。"
  },
  {
    "word": "define",
    "zh": "定义；解释",
    "example": "Can you define this word?",
    "exampleZh": "你能解释这个单词吗？"
  },
  {
    "word": "deliver",
    "zh": "递送；表达",
    "example": "She delivered the message clearly.",
    "exampleZh": "她清楚地传达了信息。"
  },
  {
    "word": "demonstrate",
    "zh": "展示；证明",
    "example": "The teacher demonstrated the method.",
    "exampleZh": "老师示范了这个方法。"
  },
  {
    "word": "effective",
    "zh": "有效的",
    "example": "This is an effective way to learn.",
    "exampleZh": "这是一个有效的学习方法。"
  },
  {
    "word": "enable",
    "zh": "使能够",
    "example": "The feature enables users to save words.",
    "exampleZh": "这个功能让用户可以保存单词。"
  },
  {
    "word": "encouraging",
    "zh": "令人鼓舞的",
    "example": "Her progress is encouraging.",
    "exampleZh": "她的进步令人鼓舞。"
  },
  {
    "word": "estimate",
    "zh": "估计",
    "example": "Can you estimate the time?",
    "exampleZh": "你能估计一下时间吗？"
  },
  {
    "word": "exception",
    "zh": "例外",
    "example": "There is one exception to the rule.",
    "exampleZh": "这个规则有一个例外。"
  },
  {
    "word": "experiment",
    "zh": "实验；尝试",
    "example": "We can experiment with a new idea.",
    "exampleZh": "我们可以尝试一个新想法。"
  },
  {
    "word": "feedback",
    "zh": "反馈",
    "example": "Your feedback helps improve the game.",
    "exampleZh": "你的反馈有助于改进游戏。"
  },
  {
    "word": "identify",
    "zh": "识别；确定",
    "example": "Can you identify the word?",
    "exampleZh": "你能认出这个单词吗？"
  },
  {
    "word": "impression",
    "zh": "印象",
    "example": "The place made a good impression on me.",
    "exampleZh": "那个地方给我留下了好印象。"
  },
  {
    "word": "improvement",
    "zh": "改善；进步",
    "example": "I can see a small improvement.",
    "exampleZh": "我能看到一点进步。"
  },
  {
    "word": "include",
    "zh": "包括",
    "example": "The price includes breakfast.",
    "exampleZh": "这个价格包括早餐。"
  },
  {
    "word": "knowledge",
    "zh": "知识",
    "example": "Reading gives us knowledge.",
    "exampleZh": "阅读带给我们知识。"
  },
  {
    "word": "lately",
    "zh": "最近",
    "example": "I have been listening to this song a lot lately.",
    "exampleZh": "我最近经常听这首歌。"
  },
  {
    "word": "logical",
    "zh": "合乎逻辑的",
    "example": "That sounds like a logical explanation.",
    "exampleZh": "那听起来是合理的解释。"
  },
  {
    "word": "manage",
    "zh": "设法做到；管理",
    "example": "I managed to finish it on time.",
    "exampleZh": "我设法按时完成了。"
  },
  {
    "word": "meaningful",
    "zh": "有意义的",
    "example": "Small moments can be meaningful.",
    "exampleZh": "小小的时刻也可以很有意义。"
  },
  {
    "word": "option",
    "zh": "选择；选项",
    "example": "We have several options.",
    "exampleZh": "我们有几个选择。"
  },
  {
    "word": "original",
    "zh": "原来的；原创的",
    "example": "I prefer the original design.",
    "exampleZh": "我更喜欢原来的设计。"
  },
  {
    "word": "practice",
    "zh": "练习；实践",
    "example": "Practice makes learning easier.",
    "exampleZh": "练习会让学习更容易。"
  },
  {
    "word": "precaution",
    "zh": "预防措施",
    "example": "We took a simple precaution.",
    "exampleZh": "我们采取了一个简单的预防措施。"
  },
  {
    "word": "process",
    "zh": "过程",
    "example": "Learning is a process.",
    "exampleZh": "学习是一个过程。"
  },
  {
    "word": "purpose",
    "zh": "目的",
    "example": "What is the purpose of this button?",
    "exampleZh": "这个按钮的作用是什么？"
  },
  {
    "word": "quality",
    "zh": "质量；品质",
    "example": "The quality is better than expected.",
    "exampleZh": "质量比想象中好。"
  },
  {
    "word": "regular",
    "zh": "规律的；普通的",
    "example": "Regular practice is helpful.",
    "exampleZh": "规律练习很有帮助。"
  },
  {
    "word": "review",
    "zh": "复习；评论",
    "example": "I review new words every weekend.",
    "exampleZh": "我每个周末复习新单词。"
  },
  {
    "word": "sequence",
    "zh": "顺序",
    "example": "Put the steps in the correct sequence.",
    "exampleZh": "把步骤按正确顺序排列。"
  },
  {
    "word": "solution",
    "zh": "解决方案",
    "example": "We found a simple solution.",
    "exampleZh": "我们找到一个简单的解决方案。"
  },
  {
    "word": "strategy",
    "zh": "策略；方法",
    "example": "Everyone has a different learning strategy.",
    "exampleZh": "每个人都有不同的学习方法。"
  },
  {
    "word": "suggest",
    "zh": "建议；暗示",
    "example": "I suggest taking a short break.",
    "exampleZh": "我建议休息一下。"
  },
  {
    "word": "summary",
    "zh": "总结",
    "example": "Here is a short summary.",
    "exampleZh": "这里是一份简短的总结。"
  },
  {
    "word": "surprisingly",
    "zh": "令人惊讶地",
    "example": "The test was surprisingly easy.",
    "exampleZh": "这次测试意外地简单。"
  },
  {
    "word": "translate",
    "zh": "翻译",
    "example": "Can you translate this sentence?",
    "exampleZh": "你能翻译这句话吗？"
  },
  {
    "word": "typical",
    "zh": "典型的；通常的",
    "example": "This is a typical local breakfast.",
    "exampleZh": "这是典型的当地早餐。"
  },
  {
    "word": "understand",
    "zh": "理解",
    "example": "I understand what you mean.",
    "exampleZh": "我明白你的意思。"
  },
  {
    "word": "update",
    "zh": "更新",
    "example": "I need to update the app.",
    "exampleZh": "我需要更新这个应用。"
  },
  {
    "word": "version",
    "zh": "版本",
    "example": "This is the latest version.",
    "exampleZh": "这是最新版本。"
  },
  {
    "word": "vocabulary",
    "zh": "词汇",
    "example": "Reading can build your vocabulary.",
    "exampleZh": "阅读可以积累你的词汇量。"
  },
  {
    "word": "brave",
    "zh": "勇敢的",
    "example": "It was brave of her to try something new.",
    "exampleZh": "她愿意尝试新事物很勇敢。"
  },
  {
    "word": "careful",
    "zh": "小心的；仔细的",
    "example": "Be careful with the glass.",
    "exampleZh": "小心那个玻璃杯。"
  },
  {
    "word": "delicious",
    "zh": "美味的",
    "example": "The soup was delicious.",
    "exampleZh": "汤很好喝。"
  },
  {
    "word": "difficult",
    "zh": "困难的",
    "example": "Some words are difficult at first.",
    "exampleZh": "有些单词一开始很难。"
  },
  {
    "word": "easygoing",
    "zh": "随和的",
    "example": "He is friendly and easygoing.",
    "exampleZh": "他友善又随和。"
  },
  {
    "word": "excited",
    "zh": "兴奋的",
    "example": "I am excited about the trip.",
    "exampleZh": "我很期待这趟旅行。"
  },
  {
    "word": "fresh",
    "zh": "新鲜的；清新的",
    "example": "The fruit tastes fresh.",
    "exampleZh": "水果吃起来很新鲜。"
  },
  {
    "word": "friendly",
    "zh": "友好的",
    "example": "The staff were friendly.",
    "exampleZh": "工作人员很友好。"
  },
  {
    "word": "funny",
    "zh": "有趣的；好笑的",
    "example": "That story was really funny.",
    "exampleZh": "那个故事真的很好笑。"
  },
  {
    "word": "healthy",
    "zh": "健康的",
    "example": "A balanced meal can be healthy and tasty.",
    "exampleZh": "均衡的饭菜可以健康又好吃。"
  },
  {
    "word": "hopeful",
    "zh": "充满希望的",
    "example": "I feel hopeful about the future.",
    "exampleZh": "我对未来充满希望。"
  },
  {
    "word": "important",
    "zh": "重要的",
    "example": "Rest is important too.",
    "exampleZh": "休息也很重要。"
  },
  {
    "word": "lucky",
    "zh": "幸运的",
    "example": "I feel lucky today.",
    "exampleZh": "我今天觉得很幸运。"
  },
  {
    "word": "modern",
    "zh": "现代的",
    "example": "The building has a modern design.",
    "exampleZh": "这栋建筑采用现代设计。"
  },
  {
    "word": "perfect",
    "zh": "完美的",
    "example": "The weather was perfect for a walk.",
    "exampleZh": "天气很适合散步。"
  },
  {
    "word": "possible",
    "zh": "可能的",
    "example": "Is it possible to change the date?",
    "exampleZh": "可以改日期吗？"
  },
  {
    "word": "ready",
    "zh": "准备好的",
    "example": "I am ready to start.",
    "exampleZh": "我准备好了。"
  },
  {
    "word": "safe",
    "zh": "安全的",
    "example": "This area feels safe during the day.",
    "exampleZh": "这个地方白天感觉很安全。"
  },
  {
    "word": "special",
    "zh": "特别的",
    "example": "Today feels special.",
    "exampleZh": "今天感觉很特别。"
  },
  {
    "word": "strange",
    "zh": "奇怪的",
    "example": "I heard a strange sound.",
    "exampleZh": "我听到一个奇怪的声音。"
  },
  {
    "word": "successful",
    "zh": "成功的",
    "example": "The event was successful.",
    "exampleZh": "活动很成功。"
  },
  {
    "word": "sweet",
    "zh": "甜的；甜蜜的",
    "example": "The tea is a little sweet.",
    "exampleZh": "这杯茶有一点甜。"
  },
  {
    "word": "talented",
    "zh": "有天赋的",
    "example": "She is talented at drawing.",
    "exampleZh": "她很有画画天赋。"
  },
  {
    "word": "tiring",
    "zh": "令人疲惫的",
    "example": "The journey was long and tiring.",
    "exampleZh": "这段旅程又长又累。"
  },
  {
    "word": "warm",
    "zh": "温暖的",
    "example": "The room feels warm and cozy.",
    "exampleZh": "房间感觉温暖又舒适。"
  },
  {
    "word": "weird",
    "zh": "奇怪的",
    "example": "That was a weird dream.",
    "exampleZh": "那是一个奇怪的梦。"
  },
  {
    "word": "welcome",
    "zh": "欢迎的；欢迎",
    "example": "You are always welcome here.",
    "exampleZh": "这里随时欢迎你。"
  },
  {
    "word": "wise",
    "zh": "明智的",
    "example": "That was a wise decision.",
    "exampleZh": "那是个明智的决定。"
  },
  {
    "word": "accompany",
    "zh": "陪伴",
    "example": "I will accompany you to the station.",
    "exampleZh": "我会陪你去车站。"
  },
  {
    "word": "allocate",
    "zh": "分配",
    "example": "We need to allocate enough time for rest.",
    "exampleZh": "我们需要分配足够的时间休息。"
  },
  {
    "word": "appreciation",
    "zh": "欣赏；感激",
    "example": "She showed her appreciation with a note.",
    "exampleZh": "她用一张字条表达了感谢。"
  },
  {
    "word": "assure",
    "zh": "向……保证",
    "example": "I can assure you that everything is fine.",
    "exampleZh": "我可以向你保证一切都很好。"
  },
  {
    "word": "boost",
    "zh": "提升；促进",
    "example": "A short walk can boost my mood.",
    "exampleZh": "短暂散步可以提升我的心情。"
  },
  {
    "word": "contemplate",
    "zh": "认真考虑；思索",
    "example": "She sat quietly to contemplate the idea.",
    "exampleZh": "她安静地坐着思考这个想法。"
  },
  {
    "word": "coordinate",
    "zh": "协调；搭配",
    "example": "The colors coordinate well.",
    "exampleZh": "这些颜色搭配得很好。"
  },
  {
    "word": "devote",
    "zh": "投入；奉献",
    "example": "She devoted time to learning English.",
    "exampleZh": "她投入时间学习英语。"
  },
  {
    "word": "distinguish",
    "zh": "区分；辨别",
    "example": "It is useful to distinguish the two sounds.",
    "exampleZh": "区分这两个声音很有帮助。"
  },
  {
    "word": "embrace",
    "zh": "拥抱；接受",
    "example": "She decided to embrace the change.",
    "exampleZh": "她决定接受这个变化。"
  },
  {
    "word": "enhance",
    "zh": "提升；增强",
    "example": "Music can enhance the atmosphere.",
    "exampleZh": "音乐可以提升氛围。"
  },
  {
    "word": "evaluate",
    "zh": "评估",
    "example": "We should evaluate the options carefully.",
    "exampleZh": "我们应该仔细评估这些选择。"
  }
];

const $ = (selector) => document.querySelector(selector);
const learnedKey = "pinkkitty-learned";

let pool = [];
let current = null;
let score = 0;
let streak = 0;
let solved = 0;
let learned = JSON.parse(localStorage.getItem(learnedKey) || "[]");

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (c) => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    '"':"&quot;",
    "'":"&#039;"
  }[c]));
}

function saveLearned() {
  localStorage.setItem(learnedKey, JSON.stringify(learned));
}

function addToBook(item) {
  if (!item || !item.word) return;

  if (!learned.some(x => x.word.toLowerCase() === item.word.toLowerCase())) {
    learned.unshift(item);
    saveLearned();
  }
}

function startGame() {
  pool = shuffle(WORDS);
  score = 0;
  streak = 0;
  solved = 0;

  updateStats();
  nextQuestion();
}

function updateStats() {
  $("#score").textContent = score;
  $("#streak").textContent = streak;
  $("#words").textContent = `${solved} / 300`;
}

function nextQuestion() {
  if (!pool.length) {
    pool = shuffle(WORDS);
  }

  current = pool.pop();

  $("#targetMeaning").textContent = current.zh;
  $("#progress").textContent = `Word ${solved + 1} / 300`;

  $("#answer").value = "";
  $("#answer").disabled = false;
  $("#answer").focus();

  $("#feedback").className = "feedback";
  $("#feedback").innerHTML = "";

  $("#nextBtn").hidden = true;
}

function checkAnswer(event) {
  event.preventDefault();

  if (!current) return;

  const answer = $("#answer").value.trim().toLowerCase();
  const correct = current.word.toLowerCase();

  if (answer === correct) {
    score += 10 + Math.min(streak, 10);
    streak += 1;
    solved += 1;

    addToBook(current);

    $("#feedback").className = "feedback good";

    $("#feedback").innerHTML = `
      <strong>✨ Correct!</strong>

      <div class="word-reveal">
        ${escapeHtml(current.word)}
      </div>

      <div>
        ${escapeHtml(current.zh)}
      </div>

      <p>
        ${escapeHtml(current.example)}
      </p>

      <p>
        ${escapeHtml(current.exampleZh)}
      </p>
    `;

    $("#nextBtn").hidden = false;
    $("#answer").disabled = true;

    updateStats();

  } else {

    streak = 0;

    $("#feedback").className = "feedback bad";

    $("#feedback").innerHTML = `
      <strong>Almost! 💭</strong>

      <div>
        Try again — check the spelling.
      </div>
    `;

    updateStats();
  }
}

function skipQuestion() {
  if (!current) return;

  streak = 0;

  $("#feedback").className = "feedback";

  $("#feedback").innerHTML = `
    <strong>Skipped 🌷</strong>

    <div>
      The answer was
      <b>${escapeHtml(current.word)}</b>.
    </div>

    <p>
      ${escapeHtml(current.zh)}
    </p>

    <p>
      ${escapeHtml(current.example)}
    </p>
  `;

  addToBook(current);

  $("#nextBtn").hidden = false;
  $("#answer").disabled = true;

  updateStats();
}

function goNext() {
  $("#answer").disabled = false;
  nextQuestion();
}

function renderBook() {
  const list = $("#bookList");

  $("#bookCount").textContent = learned.length;

  if (!learned.length) {

    list.innerHTML = `
      <p class="empty">
        Your Revision Book is empty for now 🌱
      </p>
    `;

    return;
  }

  list.innerHTML = learned.map(item => `
    <article class="book-item">

      <h3>
        ${escapeHtml(item.word)}
      </h3>

      <p>
        ${escapeHtml(item.zh || "")}
      </p>

      ${
        item.example
          ? `<div class="example">
              ${escapeHtml(item.example)}
             </div>`
          : ""
      }

      ${
        item.exampleZh
          ? `<div class="example-zh">
              ${escapeHtml(item.exampleZh)}
             </div>`
          : ""
      }

      ${
        item.audio
          ? `<button
               class="mini-audio"
               data-audio="${escapeHtml(item.audio)}">
               🔊 Listen
             </button>`
          : ""
      }

    </article>
  `).join("");
}

function openBook() {
  renderBook();
  $("#bookDialog").showModal();
}

function openDictionary() {
  $("#dictionaryDialog").showModal();
  $("#dictSearch").focus();
}

async function searchDictionary(event) {

  event.preventDefault();

  const word = $("#dictSearch").value.trim();
  const result = $("#dictResult");

  if (!word) return;

  result.innerHTML = `
    <p>
      Looking it up… 🔎
    </p>
  `;

  try {

    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`
    );

    if (!response.ok) {
      throw new Error("Not found");
    }

    const data = await response.json();

    const entry = data[0];

    const phonetic =
      entry.phonetic ||
      entry.phonetics?.find(p => p.text)?.text ||
      "";

    const audio =
      entry.phonetics?.find(p => p.audio)?.audio ||
      "";

    const meanings = entry.meanings || [];

    const definitions = meanings.flatMap(m =>
      (m.definitions || [])
        .slice(0, 2)
        .map(d => ({
          partOfSpeech: m.partOfSpeech || "",
          definition: d.definition || "",
          example: d.example || ""
        }))
    );

    result.innerHTML = `
      <div class="dict-card">

        <h3>
          ${escapeHtml(entry.word)}
        </h3>

        ${
          phonetic
            ? `<div class="phonetic">
                ${escapeHtml(phonetic)}
               </div>`
            : ""
        }

        ${
          audio
            ? `<button
                 class="audio-btn"
                 data-audio="${escapeHtml(audio)}">
                 🔊 Pronunciation
               </button>`
            : ""
        }

        <div class="definitions">

          ${
            definitions.map(d => `
              <div class="definition">

                <span class="pos">
                  ${escapeHtml(d.partOfSpeech)}
                </span>

                <p>
                  ${escapeHtml(d.definition)}
                </p>

                ${
                  d.example
                    ? `<em>
                        ${escapeHtml(d.example)}
                       </em>`
                    : ""
                }

              </div>
            `).join("")
          }

        </div>

        <button
          id="saveDictWord"
          class="primary">
          📖 Add to Revision Book
        </button>

      </div>
    `;

    const saveBtn = $("#saveDictWord");

    saveBtn.addEventListener("click", () => {

      addToBook({
        word: entry.word,

        zh: "Dictionary result — add your own Chinese meaning if you want.",

        example:
          definitions.find(d => d.example)?.example || "",

        exampleZh: "",

        audio: audio
      });

      saveBtn.textContent = "✓ Added";

      renderBook();
    });

    result
      .querySelectorAll("[data-audio]")
      .forEach(btn => {

        btn.addEventListener("click", () => {

          const audioUrl = btn.dataset.audio;

          if (audioUrl) {
            new Audio(audioUrl).play();
          }

        });

      });

  } catch (error) {

    result.innerHTML = `
      <div class="dict-error">

        <strong>
          Couldn't find that word.
        </strong>

        <p>
          Check the spelling and try again.
        </p>

      </div>
    `;
  }
}

document.addEventListener("click", (event) => {

  const btn = event.target.closest(".mini-audio");

  if (btn?.dataset.audio) {

    new Audio(btn.dataset.audio).play();

  }

});

$("#answerForm").addEventListener(
  "submit",
  checkAnswer
);

$("#skipBtn").addEventListener(
  "click",
  skipQuestion
);

$("#nextBtn").addEventListener(
  "click",
  goNext
);

$("#bookBtn").addEventListener(
  "click",
  openBook
);

$("#dictionaryBtn").addEventListener(
  "click",
  openDictionary
);

$("#dictForm").addEventListener(
  "submit",
  searchDictionary
);

startGame();
