const WORDS = [
  {word:"wander",meaning:"漫步；闲逛",example:"I like to wander around the city when I have free time.",translation:"我喜欢有空的时候在城市里到处逛逛。"},
  {word:"curious",meaning:"好奇的",example:"She was curious about what was inside the box.",translation:"她很好奇盒子里面是什么。"},
  {word:"awkward",meaning:"尴尬的；笨拙的",example:"There was an awkward silence after his question.",translation:"他问完问题后出现了一阵尴尬的沉默。"},
  {word:"relieved",meaning:"如释重负的；宽慰的",example:"I felt relieved when I found my lost wallet.",translation:"找到丢失的钱包后，我松了一口气。"},
  {word:"hesitate",meaning:"犹豫",example:"Do not hesitate to ask if you need help.",translation:"如果你需要帮助，不要犹豫，尽管开口。"},
  {word:"delight",meaning:"高兴；使愉快",example:"The little gift brought her great delight.",translation:"这份小礼物给她带来了很大的快乐。"},
  {word:"ordinary",meaning:"普通的；平凡的",example:"It looked like an ordinary day at first.",translation:"一开始，那看起来只是普通的一天。"},
  {word:"notice",meaning:"注意到；留意",example:"Did you notice the change in his voice?",translation:"你注意到他的声音有什么变化吗？"},
  {word:"improve",meaning:"改善；提高",example:"Reading every day can improve your English.",translation:"每天阅读可以提高你的英语。"},
  {word:"confident",meaning:"自信的",example:"She became more confident after practising.",translation:"练习之后，她变得更加自信。"},
  {word:"peculiar",meaning:"奇怪的；独特的",example:"There was a peculiar smell in the room.",translation:"房间里有一股奇怪的味道。"},
  {word:"appreciate",meaning:"欣赏；感激",example:"I really appreciate your help.",translation:"我真的很感谢你的帮助。"},
  {word:"destination",meaning:"目的地",example:"We finally arrived at our destination.",translation:"我们终于到达了我们的目的地。"},
  {word:"genuine",meaning:"真正的；真诚的",example:"Her smile looked completely genuine.",translation:"她的笑容看起来非常真诚。"},
  {word:"fortunate",meaning:"幸运的",example:"I was fortunate enough to meet good friends.",translation:"我很幸运能够遇到好朋友。"},
  {word:"eventually",meaning:"最终；终于",example:"He eventually found the answer.",translation:"他最终找到了答案。"},
  {word:"approach",meaning:"接近；方法",example:"Winter is approaching quickly.",translation:"冬天很快就要来了。"},
  {word:"distract",meaning:"使分心",example:"Music helps me when I need to focus and avoid distractions.",translation:"当我需要专心时，音乐能帮助我避免分心。"},
  {word:"remarkable",meaning:"非凡的；值得注意的",example:"She made remarkable progress in a short time.",translation:"她在短时间内取得了显著的进步。"},
  {word:"event",meaning:"事件；活动",example:"The school organised a special event.",translation:"学校举办了一场特别的活动。"},
  {word:"actually",meaning:"实际上",example:"I actually enjoyed the quiet afternoon.",translation:"其实我很享受那个安静的下午。"},
  {word:"adventure",meaning:"冒险；奇遇",example:"The trip turned into a small adventure.",translation:"这趟旅行变成了一次小冒险。"},
  {word:"afford",meaning:"负担得起",example:"I cannot afford a new phone right now.",translation:"我现在负担不起新手机。"},
  {word:"ancient",meaning:"古老的",example:"We visited an ancient temple.",translation:"我们参观了一座古老的寺庙。"},
  {word:"anxious",meaning:"焦虑的；担心的",example:"She felt anxious before the interview.",translation:"她面试前感到有些焦虑。"},
  {word:"apologize",meaning:"道歉",example:"I should apologize for being late.",translation:"我应该为迟到道歉。"},
  {word:"arrange",meaning:"安排；整理",example:"We arranged the chairs in a circle.",translation:"我们把椅子围成了一圈。"},
  {word:"attempt",meaning:"尝试",example:"He made another attempt to solve the puzzle.",translation:"他又尝试了一次解决这个谜题。"},
  {word:"avoid",meaning:"避免",example:"I try to avoid using my phone before bed.",translation:"我尽量避免睡前玩手机。"},
  {word:"balance",meaning:"平衡",example:"It is important to balance work and rest.",translation:"平衡工作和休息很重要。"},
  {word:"barely",meaning:"勉强；几乎不",example:"I could barely hear the announcement.",translation:"我几乎听不清那个通知。"},
  {word:"benefit",meaning:"益处；受益",example:"Walking can benefit your health.",translation:"散步对健康有益。"},
  {word:"brief",meaning:"短暂的；简短的",example:"We had a brief conversation.",translation:"我们进行了简短的交谈。"},
  {word:"calm",meaning:"平静的",example:"The lake looked calm in the morning.",translation:"早晨的湖面看起来很平静。"},
  {word:"capture",meaning:"捕捉；记录",example:"She used her camera to capture the sunset.",translation:"她用相机记录下了日落。"},
  {word:"casual",meaning:"随意的；休闲的",example:"He wore casual clothes to the picnic.",translation:"他穿着休闲服去野餐。"},
  {word:"celebrate",meaning:"庆祝",example:"We went out to celebrate her birthday.",translation:"我们出去庆祝她的生日。"},
  {word:"certain",meaning:"确定的；某个",example:"I am certain that I locked the door.",translation:"我确定自己锁了门。"},
  {word:"challenge",meaning:"挑战",example:"Learning a new skill can be a fun challenge.",translation:"学习新技能可以是一个有趣的挑战。"},
  {word:"charming",meaning:"迷人的",example:"The little café has a charming atmosphere.",translation:"那家小咖啡馆有迷人的氛围。"},
  {word:"cheerful",meaning:"愉快的；开朗的",example:"She always sounds cheerful in the morning.",translation:"她早上说话总是很愉快。"},
  {word:"comfortable",meaning:"舒服的；舒适的",example:"These shoes are comfortable enough for walking.",translation:"这双鞋舒服得可以穿去散步。"},
  {word:"complicated",meaning:"复杂的",example:"The instructions looked more complicated than expected.",translation:"说明看起来比想象中复杂。"},
  {word:"convenient",meaning:"方便的",example:"The shop is in a convenient location.",translation:"那家店的位置很方便。"},
  {word:"cozy",meaning:"舒适温馨的",example:"The room feels cozy on rainy days.",translation:"下雨天这个房间感觉很温馨。"},
  {word:"creative",meaning:"有创意的",example:"She found a creative way to decorate the box.",translation:"她想出了一个有创意的方法装饰盒子。"},
  {word:"crowded",meaning:"拥挤的",example:"The train was crowded after work.",translation:"下班后火车很拥挤。"},
  {word:"decide",meaning:"决定",example:"I cannot decide what to eat.",translation:"我决定不了要吃什么。"},
  {word:"describe",meaning:"描述",example:"Can you describe the place to me?",translation:"你可以向我描述一下那个地方吗？"},
  {word:"discover",meaning:"发现",example:"We discovered a quiet café nearby.",translation:"我们发现附近有一家安静的咖啡馆。"},
  {word:"eager",meaning:"渴望的；热切的",example:"She was eager to try the new game.",translation:"她很想试试那个新游戏。"},
  {word:"efficient",meaning:"高效的",example:"This shortcut is a more efficient way to get there.",translation:"这条捷径是更高效的去法。"},
  {word:"embarrassed",meaning:"尴尬的",example:"I felt embarrassed when I forgot his name.",translation:"我忘记他的名字时觉得很尴尬。"},
  {word:"encounter",meaning:"遇见；遭遇",example:"We had an unexpected encounter at the mall.",translation:"我们在商场意外遇见了对方。"},
  {word:"enormous",meaning:"巨大的",example:"The museum has an enormous collection.",translation:"那座博物馆有大量的收藏。"},
  {word:"entire",meaning:"整个的",example:"I spent the entire afternoon reading.",translation:"我整个下午都在看书。"},
  {word:"especially",meaning:"尤其",example:"I like this café, especially its drinks.",translation:"我喜欢这家咖啡馆，尤其是它的饮料。"},
  {word:"essential",meaning:"必要的；重要的",example:"Sleep is essential for a good day.",translation:"睡眠对美好的一天很重要。"},
  {word:"familiar",meaning:"熟悉的",example:"Her voice sounded familiar.",translation:"她的声音听起来很熟悉。"},
  {word:"flexible",meaning:"灵活的",example:"My schedule is quite flexible this week.",translation:"我这周的时间安排比较灵活。"},
  {word:"focus",meaning:"专注；重点",example:"I need some quiet time to focus.",translation:"我需要一点安静的时间来专心。"},
  {word:"fragrant",meaning:"芳香的",example:"The tea has a light, fragrant smell.",translation:"这杯茶有淡淡的芳香。"},
  {word:"frequent",meaning:"频繁的",example:"He is a frequent visitor to this bookstore.",translation:"他经常来这家书店。"},
  {word:"generous",meaning:"慷慨的",example:"She was generous with her time.",translation:"她很愿意花时间帮助别人。"},
  {word:"gentle",meaning:"温柔的；轻柔的",example:"The breeze was gentle and cool.",translation:"微风轻柔而凉爽。"},
  {word:"grateful",meaning:"感激的",example:"I am grateful for your kindness.",translation:"我很感激你的善意。"},
  {word:"gloomy",meaning:"阴沉的；忧郁的",example:"The sky looked gloomy before the rain.",translation:"下雨前天空看起来阴沉沉的。"},
  {word:"graceful",meaning:"优雅的",example:"The dancer made a graceful turn.",translation:"舞者做了一个优雅的转身。"},
  {word:"habit",meaning:"习惯",example:"Reading before bed is a good habit.",translation:"睡前阅读是个好习惯。"},
  {word:"helpful",meaning:"有帮助的",example:"Her advice was very helpful.",translation:"她的建议很有帮助。"},
  {word:"honest",meaning:"诚实的",example:"Please be honest with me.",translation:"请对我诚实。"},
  {word:"imagine",meaning:"想象",example:"Can you imagine living by the sea?",translation:"你能想象住在海边吗？"},
  {word:"impressive",meaning:"令人印象深刻的",example:"The view from the hill was impressive.",translation:"山上的景色令人印象深刻。"},
  {word:"independent",meaning:"独立的",example:"She enjoys travelling independently.",translation:"她喜欢独立旅行。"},
  {word:"inspire",meaning:"激励；启发",example:"Her story inspired me to keep trying.",translation:"她的故事激励我继续努力。"},
  {word:"interesting",meaning:"有趣的",example:"We had an interesting conversation.",translation:"我们进行了一次有趣的谈话。"},
  {word:"journey",meaning:"旅程",example:"The journey took three hours.",translation:"这段旅程花了三个小时。"},
  {word:"kindness",meaning:"善意；好心",example:"A little kindness can brighten someone's day.",translation:"一点善意就能让某人的一天变得更美好。"},
  {word:"lively",meaning:"活泼的；热闹的",example:"The night market is lively at night.",translation:"夜市晚上很热闹。"},
  {word:"lonely",meaning:"孤单的",example:"He felt lonely in the new city.",translation:"他在新城市里感到孤单。"},
  {word:"luxury",meaning:"奢侈；奢华",example:"A quiet afternoon feels like a luxury sometimes.",translation:"有时一个安静的下午就像一种奢侈。"},
  {word:"mature",meaning:"成熟的",example:"She gave a mature response.",translation:"她给出了成熟的回应。"},
  {word:"memorable",meaning:"难忘的",example:"It was a memorable weekend.",translation:"那是一个难忘的周末。"},
  {word:"mysterious",meaning:"神秘的",example:"There was a mysterious note on the table.",translation:"桌上有一张神秘的纸条。"},
  {word:"natural",meaning:"自然的",example:"She has a natural way of making people laugh.",translation:"她很自然地就能逗人发笑。"},
  {word:"neat",meaning:"整洁的；利落的",example:"His desk is always neat.",translation:"他的桌子总是很整洁。"},
  {word:"obvious",meaning:"明显的",example:"The answer became obvious after a while.",translation:"过了一会儿答案就明显了。"},
  {word:"patient",meaning:"耐心的",example:"Thank you for being patient with me.",translation:"谢谢你对我有耐心。"},
  {word:"peaceful",meaning:"平静的",example:"The garden is peaceful in the early morning.",translation:"花园清晨十分宁静。"},
  {word:"pleasant",meaning:"愉快的；宜人的",example:"We had a pleasant afternoon together.",translation:"我们一起度过了愉快的下午。"},
  {word:"precious",meaning:"珍贵的",example:"This photo is precious to me.",translation:"这张照片对我来说很珍贵。"},
  {word:"prepare",meaning:"准备",example:"I need to prepare for tomorrow.",translation:"我需要为明天做准备。"},
  {word:"prevent",meaning:"预防；阻止",example:"Wearing a helmet can prevent serious injuries.",translation:"戴头盔可以预防严重伤害。"},
  {word:"probably",meaning:"可能；大概",example:"She will probably arrive soon.",translation:"她可能很快就到了。"},
  {word:"proper",meaning:"适当的；正确的",example:"Make sure you use the proper equipment.",translation:"确保你使用正确的设备。"},
  {word:"rare",meaning:"罕见的；稀有的",example:"It is rare to see snow in Malaysia.",translation:"在马来西亚看到雪很罕见。"},
  {word:"reasonable",meaning:"合理的",example:"That sounds like a reasonable idea.",translation:"那听起来是个合理的想法。"},
  {word:"recommend",meaning:"推荐",example:"I would recommend this restaurant.",translation:"我会推荐这家餐厅。"},
  {word:"reduce",meaning:"减少",example:"We should reduce unnecessary spending.",translation:"我们应该减少不必要的开销。"},
  {word:"reliable",meaning:"可靠的",example:"She is a reliable friend.",translation:"她是一个可靠的朋友。"},
  {word:"remain",meaning:"保持；留下",example:"Please remain calm.",translation:"请保持冷静。"},
  {word:"replace",meaning:"替换；取代",example:"I need to replace my old bag.",translation:"我需要换掉我的旧包。"},
  {word:"require",meaning:"需要；要求",example:"This job requires good communication skills.",translation:"这份工作需要良好的沟通能力。"},
  {word:"respect",meaning:"尊重",example:"We should respect other people's opinions.",translation:"我们应该尊重别人的意见。"},
  {word:"responsible",meaning:"负责的",example:"She is responsible for organising the event.",translation:"她负责组织这个活动。"},
  {word:"routine",meaning:"日常；惯例",example:"My morning routine is quite simple.",translation:"我的晨间日常很简单。"},
  {word:"satisfying",meaning:"令人满意的",example:"Finishing the project felt satisfying.",translation:"完成这个项目让人很有满足感。"},
  {word:"sensible",meaning:"明智的；合理的",example:"That seems like a sensible choice.",translation:"那似乎是个明智的选择。"},
  {word:"sincere",meaning:"真诚的",example:"She gave me a sincere apology.",translation:"她真诚地向我道歉。"},
  {word:"slightly",meaning:"稍微；略微",example:"The room is slightly colder today.",translation:"今天房间稍微冷了一点。"},
  {word:"smooth",meaning:"顺利的；平滑的",example:"Everything went smoothly.",translation:"一切都进行得很顺利。"},
  {word:"specific",meaning:"具体的；特定的",example:"Can you give me a specific example?",translation:"你可以给我一个具体的例子吗？"},
  {word:"stubborn",meaning:"固执的",example:"He can be quite stubborn sometimes.",translation:"他有时候会比较固执。"},
  {word:"sudden",meaning:"突然的",example:"There was a sudden change in the weather.",translation:"天气突然发生了变化。"},
  {word:"suitable",meaning:"合适的",example:"This dress is suitable for the occasion.",translation:"这件裙子适合这个场合。"},
  {word:"supportive",meaning:"支持的；给予支持的",example:"My family has always been supportive.",translation:"我的家人一直都很支持我。"},
  {word:"surround",meaning:"围绕",example:"The house is surrounded by trees.",translation:"房子周围都是树。"},
  {word:"temporary",meaning:"暂时的",example:"This is only a temporary solution.",translation:"这只是暂时的解决办法。"},
  {word:"thoughtful",meaning:"体贴的；深思熟虑的",example:"That was very thoughtful of you.",translation:"你真的很体贴。"},
  {word:"traditional",meaning:"传统的",example:"We tried some traditional food.",translation:"我们尝试了一些传统食物。"},
  {word:"unique",meaning:"独特的",example:"Every place has its own unique character.",translation:"每个地方都有自己独特的特色。"},
  {word:"valuable",meaning:"有价值的；宝贵的",example:"Experience can be more valuable than money.",translation:"经验有时比金钱更宝贵。"},
  {word:"various",meaning:"各种各样的",example:"The shop sells various kinds of snacks.",translation:"这家店卖各种各样的零食。"},
  {word:"visible",meaning:"可见的",example:"The mountains were clearly visible from here.",translation:"从这里可以清楚地看到山。"},
  {word:"wonderful",meaning:"精彩的；美好的",example:"We had a wonderful time.",translation:"我们度过了一段美好的时光。"},
  {word:"accurate",meaning:"准确的",example:"Please make sure the information is accurate.",translation:"请确保信息准确。"},
  {word:"adapt",meaning:"适应；调整",example:"It took me some time to adapt to the new routine.",translation:"我花了一些时间适应新的日常。"},
  {word:"admire",meaning:"欣赏；钦佩",example:"I really admire her creativity.",translation:"我很欣赏她的创造力。"},
  {word:"advantage",meaning:"优势；好处",example:"One advantage of studying online is flexibility.",translation:"线上学习的一个优势是灵活。"},
  {word:"alternative",meaning:"替代选择",example:"We need to find an alternative solution.",translation:"我们需要找到另一个解决办法。"},
  {word:"ambitious",meaning:"有抱负的",example:"She has ambitious plans for the future.",translation:"她对未来有很大的计划。"},
  {word:"anticipate",meaning:"预期；预料",example:"We anticipate a busy weekend.",translation:"我们预计周末会很忙。"},
  {word:"apparent",meaning:"明显的",example:"It became apparent that we needed more time.",translation:"很明显我们需要更多时间。"},
  {word:"appropriate",meaning:"适当的",example:"Wear something appropriate for the weather.",translation:"穿适合天气的衣服。"},
  {word:"artificial",meaning:"人工的；人造的",example:"The flowers look almost real, but they are artificial.",translation:"这些花看起来几乎是真的，但其实是人造的。"},
  {word:"atmosphere",meaning:"气氛；氛围",example:"The café has a relaxing atmosphere.",translation:"这家咖啡馆有轻松的氛围。"},
  {word:"attractive",meaning:"有吸引力的",example:"The design is simple but attractive.",translation:"这个设计简单但很有吸引力。"},
  {word:"authentic",meaning:"真实的；正宗的",example:"The restaurant serves authentic local food.",translation:"这家餐厅提供正宗的本地食物。"},
  {word:"aware",meaning:"意识到的",example:"Are you aware of the changes?",translation:"你知道这些变化吗？"},
  {word:"beneficial",meaning:"有益的",example:"Regular reading is beneficial for language learning.",translation:"定期阅读对语言学习有益。"},
  {word:"brilliant",meaning:"出色的；聪明的",example:"That was a brilliant idea.",translation:"那是个很棒的想法。"},
  {word:"capable",meaning:"有能力的",example:"She is capable of solving the problem herself.",translation:"她有能力自己解决这个问题。"},
  {word:"considerable",meaning:"相当大的；可观的",example:"The project requires considerable effort.",translation:"这个项目需要相当大的努力。"},
  {word:"consistent",meaning:"一致的；持续的",example:"Consistent practice can improve your skills.",translation:"持续练习可以提高你的技能。"},
  {word:"contribute",meaning:"贡献；促成",example:"Everyone can contribute something useful.",translation:"每个人都可以贡献一些有用的东西。"},
  {word:"convince",meaning:"说服",example:"She convinced me to give it another try.",translation:"她说服我再试一次。"},
  {word:"cooperate",meaning:"合作",example:"We need to cooperate to finish the project.",translation:"我们需要合作完成这个项目。"},
  {word:"curiosity",meaning:"好奇心",example:"Curiosity helps us learn new things.",translation:"好奇心帮助我们学习新事物。"},
  {word:"decline",meaning:"下降；拒绝",example:"She politely declined the invitation.",translation:"她礼貌地拒绝了邀请。"},
  {word:"demonstrate",meaning:"展示；证明",example:"The teacher demonstrated how to use the machine.",translation:"老师示范了如何使用这台机器。"},
  {word:"depend",meaning:"取决于；依靠",example:"The final price depends on the size.",translation:"最终价格取决于尺寸。"},
  {word:"deserve",meaning:"值得",example:"You deserve a break after all that work.",translation:"做了这么多工作后，你值得休息一下。"},
  {word:"determine",meaning:"决定；确定",example:"The results will determine what happens next.",translation:"结果将决定接下来会发生什么。"},
  {word:"distinct",meaning:"明显不同的；独特的",example:"The two flavours are quite distinct.",translation:"这两种味道明显不同。"},
  {word:"diverse",meaning:"多样的",example:"Malaysia has a diverse food culture.",translation:"马来西亚拥有多元的饮食文化。"},
  {word:"dramatic",meaning:"戏剧性的；巨大的",example:"There was a dramatic change in the weather.",translation:"天气发生了巨大的变化。"},
  {word:"effective",meaning:"有效的",example:"This method is simple and effective.",translation:"这个方法简单又有效。"},
  {word:"emphasize",meaning:"强调",example:"The teacher emphasized the importance of practice.",translation:"老师强调了练习的重要性。"},
  {word:"encourage",meaning:"鼓励",example:"My friends encourage me to keep learning.",translation:"我的朋友鼓励我继续学习。"},
  {word:"essentially",meaning:"本质上；基本上",example:"The two ideas are essentially the same.",translation:"这两个想法本质上是一样的。"},
  {word:"estimate",meaning:"估计",example:"Can you estimate how long it will take?",translation:"你能估计需要多久吗？"},
  {word:"evaluate",meaning:"评估",example:"We need to evaluate the results carefully.",translation:"我们需要仔细评估结果。"},
  {word:"evident",meaning:"明显的",example:"Her excitement was evident.",translation:"她的兴奋显而易见。"},
  {word:"exceed",meaning:"超过",example:"The final cost exceeded my budget.",translation:"最终费用超过了我的预算。"},
  {word:"expand",meaning:"扩大；扩展",example:"The business plans to expand next year.",translation:"这家企业计划明年扩大规模。"},
  {word:"explore",meaning:"探索",example:"We spent the afternoon exploring the old town.",translation:"我们花了一个下午探索老城区。"},
  {word:"extraordinary",meaning:"非凡的；特别的",example:"She has an extraordinary talent for drawing.",translation:"她有非凡的绘画天赋。"},
  {word:"fascinating",meaning:"迷人的；极有趣的",example:"I find the history of this place fascinating.",translation:"我觉得这个地方的历史非常有趣。"},
  {word:"flexibility",meaning:"灵活性",example:"The job offers a lot of flexibility.",translation:"这份工作提供了很大的灵活性。"},
  {word:"fortunate",meaning:"幸运的",example:"We were fortunate to have good weather.",translation:"我们很幸运遇到了好天气。"},
  {word:"frequently",meaning:"经常地",example:"She frequently visits the library.",translation:"她经常去图书馆。"},
  {word:"genuine",meaning:"真正的；真诚的",example:"His concern seemed genuine.",translation:"他的关心似乎是真诚的。"},
  {word:"gradually",meaning:"逐渐地",example:"Her confidence gradually improved.",translation:"她的自信逐渐提高了。"},
  {word:"hesitation",meaning:"犹豫",example:"After a moment of hesitation, she answered.",translation:"犹豫了一会儿后，她回答了。"},
  {word:"identify",meaning:"识别；确定",example:"Can you identify the problem?",translation:"你能找出问题吗？"},
  {word:"ignore",meaning:"忽视",example:"It is difficult to ignore the noise.",translation:"很难忽视那些噪音。"},
  {word:"illustrate",meaning:"说明；阐明",example:"This example illustrates the idea clearly.",translation:"这个例子清楚地说明了这个想法。"},
  {word:"imply",meaning:"暗示；意味着",example:"His words seemed to imply something else.",translation:"他的话似乎暗示了其他事情。"},
  {word:"inevitable",meaning:"不可避免的",example:"Change is inevitable.",translation:"变化是不可避免的。"},
  {word:"influence",meaning:"影响",example:"Friends can influence our choices.",translation:"朋友可能会影响我们的选择。"},
  {word:"initial",meaning:"最初的",example:"My initial plan was completely different.",translation:"我最初的计划完全不同。"},
  {word:"maintain",meaning:"维持；保持",example:"It is important to maintain a healthy routine.",translation:"保持健康的日常习惯很重要。"},
  {word:"meaningful",meaning:"有意义的",example:"We had a meaningful conversation.",translation:"我们进行了一次有意义的谈话。"},
  {word:"notable",meaning:"值得注意的；显著的",example:"There has been a notable improvement.",translation:"已经有了明显的进步。"},
  {word:"optimistic",meaning:"乐观的",example:"She remains optimistic about the future.",translation:"她对未来仍然保持乐观。"},
  {word:"overcome",meaning:"克服",example:"He worked hard to overcome his fear.",translation:"他努力克服自己的恐惧。"},
  {word:"productive",meaning:"有效率的；有成果的",example:"I had a productive morning.",translation:"我度过了一个很有成效的早晨。"},
  {word:"resilient",meaning:"有韧性的；坚韧的",example:"She is resilient when facing difficulties.",translation:"面对困难时她很坚韧。"},
  {word:"satisfying",meaning:"令人满足的",example:"Finishing a difficult task can be satisfying.",translation:"完成困难的任务会让人很有满足感。"},
  {word:"thoughtfully",meaning:"体贴地；认真地",example:"She thoughtfully prepared a small gift.",translation:"她贴心地准备了一份小礼物。"},
  {word:"tranquil",meaning:"宁静的",example:"The beach was tranquil in the early morning.",translation:"清晨的海滩十分宁静。"},
  {word:"vibrant",meaning:"充满活力的；鲜艳的",example:"The city has a vibrant culture.",translation:"这座城市有充满活力的文化。"},
  {word:"widespread",meaning:"广泛的",example:"The tradition is widespread across the region.",translation:"这个传统在该地区广泛流传。"},
  {word:"yearn",meaning:"渴望；向往",example:"She yearned for a quiet holiday.",translation:"她向往一个安静的假期。"},
  {word:"accompany",meaning:"陪伴",example:"Would you like me to accompany you?",translation:"你想让我陪你一起去吗？"},
  {word:"allocate",meaning:"分配",example:"We need to allocate enough time for the project.",translation:"我们需要为这个项目分配足够的时间。"},
  {word:"assure",meaning:"保证；使放心",example:"I assure you that everything is fine.",translation:"我向你保证一切都很好。"},
  {word:"boost",meaning:"提升；促进",example:"A short walk can boost my mood.",translation:"短暂散步可以改善我的心情。"},
  {word:"contemplate",meaning:"仔细考虑",example:"She sat quietly and contemplated her next step.",translation:"她安静地坐着思考下一步。"},
  {word:"coordinate",meaning:"协调",example:"We need to coordinate our plans.",translation:"我们需要协调我们的计划。"},
  {word:"devote",meaning:"投入；奉献",example:"She devotes her free time to drawing.",translation:"她把空闲时间投入到绘画中。"},
  {word:"distinguish",meaning:"区分；辨别",example:"It can be difficult to distinguish the two sounds.",translation:"区分这两个声音可能很困难。"},
  {word:"embrace",meaning:"拥抱；接受",example:"She decided to embrace the change.",translation:"她决定接受这个变化。"},
  {word:"enhance",meaning:"增强；改善",example:"Music can enhance the atmosphere.",translation:"音乐可以增强氛围。"},
  {word:"anticipate",meaning:"预期；预料",example:"We anticipate some changes next month.",translation:"我们预计下个月会有一些变化。"},
  {word:"clarify",meaning:"澄清；说明",example:"Could you clarify what you mean?",translation:"你可以说明一下你的意思吗？"},
  {word:"compelling",meaning:"引人注目的；令人信服的",example:"She gave a compelling reason for her decision.",translation:"她为自己的决定给出了令人信服的理由。"},
  {word:"comprehensive",meaning:"全面的",example:"The guide provides a comprehensive overview.",translation:"这份指南提供了全面的概述。"},
  {word:"concentrate",meaning:"集中注意力",example:"It is easier to concentrate in a quiet room.",translation:"在安静的房间里更容易集中注意力。"},
  {word:"confidently",meaning:"自信地",example:"She answered the question confidently.",translation:"她自信地回答了问题。"},
  {word:"consequence",meaning:"后果",example:"Every decision has a consequence.",translation:"每个决定都有后果。"},
  {word:"considerate",meaning:"体贴的；为他人着想的",example:"It was considerate of her to check on me.",translation:"她来关心我真的很体贴。"},
  {word:"consistent",meaning:"一致的；持续的",example:"Consistent effort usually brings results.",translation:"持续的努力通常会带来成果。"},
  {word:"constructive",meaning:"建设性的",example:"He gave me some constructive feedback.",translation:"他给了我一些有建设性的反馈。"},
  {word:"consume",meaning:"消耗；消费",example:"This device consumes very little energy.",translation:"这个设备消耗的能源很少。"},
  {word:"convincing",meaning:"令人信服的",example:"Her explanation was convincing.",translation:"她的解释很有说服力。"},
  {word:"crucial",meaning:"至关重要的",example:"Good communication is crucial in teamwork.",translation:"良好的沟通在团队合作中至关重要。"},
  {word:"dedicate",meaning:"投入；奉献",example:"She decided to dedicate more time to learning.",translation:"她决定投入更多时间学习。"},
  {word:"deliberate",meaning:"故意的；深思熟虑的",example:"It was a deliberate decision.",translation:"这是一个经过深思熟虑的决定。"},
  {word:"demonstration",meaning:"示范；演示",example:"The teacher gave us a demonstration.",translation:"老师给我们做了一次示范。"},
  {word:"derive",meaning:"获得；源于",example:"Many words derive from older languages.",translation:"许多词源自更古老的语言。"},
  {word:"efficiently",meaning:"高效地",example:"She completed the task efficiently.",translation:"她高效地完成了任务。"},
  {word:"encountered",meaning:"遇到；遭遇",example:"We encountered several problems during the trip.",translation:"旅行期间我们遇到了几个问题。"},
  {word:"enthusiastic",meaning:"热情的",example:"She is enthusiastic about learning languages.",translation:"她对学习语言很有热情。"},
  {word:"essentially",meaning:"本质上；基本上",example:"The two plans are essentially identical.",translation:"这两个计划本质上几乎一样。"},
  {word:"examine",meaning:"检查；仔细研究",example:"The doctor examined the patient carefully.",translation:"医生仔细检查了病人。"},
  {word:"exceptional",meaning:"杰出的；非凡的",example:"She showed exceptional creativity.",translation:"她展现出了非凡的创造力。"},
  {word:"exhausted",meaning:"筋疲力尽的",example:"I was exhausted after the long day.",translation:"漫长的一天后我筋疲力尽。"},
  {word:"favourable",meaning:"有利的；令人满意的",example:"The weather conditions were favourable.",translation:"天气条件很有利。"},
  {word:"frequently",meaning:"经常地",example:"He frequently visits his grandparents.",translation:"他经常去看望祖父母。"},
  {word:"fundamental",meaning:"基本的；根本的",example:"Trust is fundamental to a good relationship.",translation:"信任是良好关系的基础。"},
  {word:"genuinely",meaning:"真诚地；真正地",example:"She genuinely wanted to help.",translation:"她是真心想帮忙的。"},
  {word:"gradual",meaning:"逐渐的",example:"There was a gradual improvement.",translation:"情况逐渐改善了。"},
  {word:"highlight",meaning:"突出；重点",example:"The guide highlights several interesting places.",translation:"这份指南重点介绍了几个有趣的地方。"},
  {word:"implement",meaning:"实施；执行",example:"The school plans to implement a new system.",translation:"学校计划实施一个新系统。"},
  {word:"imply",meaning:"暗示；意味着",example:"His expression seemed to imply something.",translation:"他的表情似乎暗示了什么。"},
  {word:"incredible",meaning:"难以置信的；极好的",example:"The view was absolutely incredible.",translation:"景色简直令人难以置信。"},
  {word:"indicate",meaning:"表明；指出",example:"The sign indicates the direction.",translation:"这个标志指出了方向。"},
  {word:"inevitable",meaning:"不可避免的",example:"Mistakes are sometimes inevitable.",translation:"错误有时是不可避免的。"},
  {word:"innovative",meaning:"创新的",example:"The company created an innovative product.",translation:"这家公司创造了一款创新产品。"},
  {word:"interpret",meaning:"解释；理解",example:"People may interpret the message differently.",translation:"人们可能会以不同方式理解这条信息。"},
  {word:"justify",meaning:"证明……合理；为……辩解",example:"Can you justify your decision?",translation:"你能说明你的决定为什么合理吗？"},
  {word:"logical",meaning:"合乎逻辑的",example:"That sounds like a logical explanation.",translation:"那听起来是一个合乎逻辑的解释。"},
  {word:"nevertheless",meaning:"然而；尽管如此",example:"It was difficult; nevertheless, we continued.",translation:"这很困难，但我们还是继续了。"},
  {word:"noteworthy",meaning:"值得注意的",example:"Her progress is noteworthy.",translation:"她的进步值得注意。"},
  {word:"objective",meaning:"目标；客观的",example:"Our main objective is to finish the project.",translation:"我们的主要目标是完成这个项目。"},
  {word:"obtain",meaning:"获得",example:"You need to obtain permission first.",translation:"你需要先获得许可。"},
  {word:"occasionally",meaning:"偶尔",example:"I occasionally go for a walk at night.",translation:"我偶尔晚上出去散步。"},
  {word:"persistent",meaning:"坚持不懈的；持续的",example:"Her persistent effort paid off.",translation:"她坚持不懈的努力得到了回报。"},
  {word:"perspective",meaning:"观点；角度",example:"Try to see the situation from another perspective.",translation:"试着从另一个角度看这个情况。"},
  {word:"potential",meaning:"潜力；潜在的",example:"She has a lot of potential.",translation:"她有很大的潜力。"},
  {word:"precisely",meaning:"准确地；正是",example:"That is precisely what I meant.",translation:"那正是我的意思。"},
  {word:"priority",meaning:"优先事项",example:"Your health should be a priority.",translation:"你的健康应该是优先考虑的事情。"},
  {word:"profound",meaning:"深刻的",example:"The book had a profound effect on me.",translation:"这本书对我产生了深刻的影响。"},
  {word:"promising",meaning:"有前途的；有希望的",example:"The young artist shows promising talent.",translation:"这位年轻艺术家展现出了很有前途的才华。"},
  {word:"recognize",meaning:"认出；意识到",example:"I did not recognize him at first.",translation:"我一开始没有认出他。"},
  {word:"relevant",meaning:"相关的",example:"Please include only relevant information.",translation:"请只包括相关的信息。"},
  {word:"reluctant",meaning:"不情愿的",example:"She was reluctant to make a decision.",translation:"她不太愿意做决定。"},
  {word:"remarkably",meaning:"显著地；非常",example:"The situation improved remarkably.",translation:"情况有了非常明显的改善。"},
  {word:"significant",meaning:"重要的；显著的",example:"There has been a significant change.",translation:"发生了明显的变化。"},
  {word:"sufficient",meaning:"足够的",example:"We have sufficient time to finish.",translation:"我们有足够的时间完成。"},
  {word:"temporary",meaning:"暂时的",example:"The problem is only temporary.",translation:"这个问题只是暂时的。"},
  {word:"thorough",meaning:"彻底的；全面的",example:"She gave the room a thorough cleaning.",translation:"她把房间彻底打扫了一遍。"},
  {word:"transform",meaning:"改变；转变",example:"The renovation transformed the old room.",translation:"装修改变了这个旧房间。"},
  {word:"ultimately",meaning:"最终",example:"Ultimately, the decision is yours.",translation:"最终决定权在你。"},
  {word:"unexpected",meaning:"意外的",example:"We received an unexpected gift.",translation:"我们收到了一份意外的礼物。"},
  {word:"valuable",meaning:"有价值的；宝贵的",example:"This experience was extremely valuable.",translation:"这次经历非常宝贵。"},
  {word:"versatile",meaning:"多用途的；多才多艺的",example:"This bag is versatile and practical.",translation:"这个包用途很多而且实用。"},
  {word:"vivid",meaning:"生动的；鲜明的",example:"I still have a vivid memory of that day.",translation:"我仍然清楚地记得那一天。"},
  {word:"willing",meaning:"愿意的",example:"She is willing to learn new things.",translation:"她愿意学习新东西。"},
  {word:"abundant",meaning:"丰富的；充足的",example:"The area has abundant natural resources.",translation:"这个地区拥有丰富的自然资源。"},
  {word:"accomplish",meaning:"完成；实现",example:"She worked hard to accomplish her goal.",translation:"她努力实现自己的目标。"},
  {word:"adequate",meaning:"足够的；适当的",example:"Make sure you get adequate rest.",translation:"确保你得到足够的休息。"},
  {word:"appreciation",meaning:"欣赏；感激",example:"She expressed her appreciation for the gift.",translation:"她表达了对这份礼物的感谢。"},
  {word:"assumption",meaning:"假设；认为",example:"That is only an assumption.",translation:"那只是一种假设。"},
  {word:"boost",meaning:"提升；促进",example:"The good news gave me a boost of confidence.",translation:"这个好消息让我更有信心。"},
  {word:"compassion",meaning:"同情；关怀",example:"She treated everyone with compassion.",translation:"她以关怀的态度对待每个人。"},
  {word:"coordinate",meaning:"协调",example:"We need to coordinate the schedule.",translation:"我们需要协调时间表。"},
  {word:"devote",meaning:"投入；奉献",example:"He devoted years to the project.",translation:"他多年投入于这个项目。"},
  {word:"distinguish",meaning:"区分；辨别",example:"It is difficult to distinguish the twins.",translation:"很难区分这对双胞胎。"},
  {word:"enhance",meaning:"增强；改善",example:"This feature enhances the user experience.",translation:"这个功能改善了用户体验。"}, 
    {word:"admire",meaning:"欣赏；钦佩",example:"I really admire people who stay kind in difficult situations.",translation:"我很欣赏那些在困难情况下依然保持善良的人。"},
  {word:"arrange",meaning:"安排；整理",example:"She helped me arrange the books on the shelf.",translation:"她帮我把书整理到书架上。"},
  {word:"bargain",meaning:"便宜货；讨价还价",example:"This jacket was a real bargain.",translation:"这件外套真的很便宜。"},
  {word:"capture",meaning:"捕捉；记录",example:"The photo captured a beautiful sunset.",translation:"这张照片记录下了美丽的日落。"},
  {word:"cheerful",meaning:"愉快的；开朗的",example:"She always has a cheerful smile.",translation:"她总是带着愉快的笑容。"},
  {word:"delicate",meaning:"精致的；脆弱的",example:"Be careful with this delicate glass.",translation:"拿这个易碎的玻璃杯时要小心。"},
  {word:"eager",meaning:"渴望的；热切的",example:"He was eager to learn something new.",translation:"他很渴望学习新的东西。"},
  {word:"explore",meaning:"探索；探究",example:"We spent the afternoon exploring the old town.",translation:"我们花了一下午探索那座老城区。"},
  {word:"hesitate",meaning:"犹豫",example:"Don't hesitate to ask for help.",translation:"不要犹豫，有需要就寻求帮助。"},
  {word:"locate",meaning:"找到；确定位置",example:"I couldn't locate my keys this morning.",translation:"我今天早上找不到我的钥匙。"},
  {word:"mention",meaning:"提到",example:"She didn't mention anything about the meeting.",translation:"她没有提到任何关于会议的事情。"},
  {word:"ordinary",meaning:"普通的；平常的",example:"It looked like an ordinary day at first.",translation:"一开始，那看起来只是普通的一天。"},
  {word:"persuade",meaning:"说服",example:"She persuaded me to try the new restaurant.",translation:"她说服我去尝试那家新餐厅。"},
  {word:"remind",meaning:"提醒；使想起",example:"Please remind me to call her tomorrow.",translation:"请提醒我明天打电话给她。"},
  {word:"reliable",meaning:"可靠的",example:"He is a reliable friend who always keeps his promises.",translation:"他是个可靠的朋友，总是信守承诺。"},
  {word:"rescue",meaning:"营救；救援",example:"The team worked together to rescue the lost hiker.",translation:"团队一起努力营救那名迷路的徒步者。"},
  {word:"specific",meaning:"具体的；特定的",example:"Can you give me a specific example?",translation:"你能给我一个具体的例子吗？"},
  {word:"whisper",meaning:"低声说；耳语",example:"She whispered something in my ear.",translation:"她在我耳边低声说了些什么。"},
  {word:"generous",meaning:"慷慨的；大方的",example:"He was generous enough to share his food with everyone.",translation:"他很大方，愿意和大家分享他的食物。"},
];


const state = {
  words: [],
  index: 0,
  score: 0,
  streak: 0,
  answered: false,
  learned: loadLearned()
};

const $ = id => document.getElementById(id);

const targetWord = $("targetWord");
const answerInput = $("answerInput");
const feedback = $("feedback");
const feedbackIcon = $("feedbackIcon");
const feedbackTitle = $("feedbackTitle");
const feedbackText = $("feedbackText");
const nextButton = $("nextButton");
const message = $("message");
const progressBar = $("progressBar");
const progressText = $("progressText");
const scoreEl = $("score");
const streakEl = $("streak");
const wordCount = $("wordCount");
const hint = $("hint");
const pronounceButton = $("pronounceButton");
const bookDialog = $("bookDialog");
const endDialog = $("endDialog");


/* =========================
   Revision Book
========================= */

function loadLearned() {
  try {
    const data = JSON.parse(
      localStorage.getItem("pinkkitty-learned") || "[]"
    );

    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function saveLearned() {
  localStorage.setItem(
    "pinkkitty-learned",
    JSON.stringify(state.learned)
  );
}


/* =========================
   Shuffle
========================= */

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}


/* =========================
   Current Word
========================= */

function currentWord() {
  return state.words[state.index];
}
function speakCurrentWord() {
  const item = currentWord();

  if (!item) return;

  if (!("speechSynthesis" in window)) {
    hint.textContent = "Your browser does not support pronunciation.";
    return;
  }

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(item.word);

  utterance.lang = "en-US";
  utterance.rate = 0.85;
  utterance.pitch = 1;

  window.speechSynthesis.speak(utterance);
}


/* =========================
   Start Game
========================= */

function startGame() {
  state.words = shuffle(WORDS);
  state.index = 0;
  state.score = 0;
  state.streak = 0;
  state.answered = false;

  updateStats();
  showWord();
}


/* =========================
   Show Word
========================= */

function showWord() {
  const item = currentWord();

  if (!item) return;

  state.answered = false;

  targetWord.textContent = item.word;

  hint.textContent = "Take a guess — you've got this!";

  answerInput.value = "";
  answerInput.disabled = false;

  $("answerForm").classList.remove("hidden");
  $("skipButton").classList.remove("hidden");

  feedback.classList.add("hidden");
  feedback.classList.remove("correct", "wrong");

  nextButton.classList.add("hidden");

  const number = state.index + 1;

  progressText.textContent =
    `Word ${number} of ${state.words.length}`;

  progressBar.style.width =
    `${(number / state.words.length) * 100}%`;

  message.textContent =
    state.streak > 1
      ? `${state.streak} in a row! ✨`
      : "Take your time ♡";

  requestAnimationFrame(() => {
    answerInput.focus();
  });
}


/* =========================
   Update Stats
========================= */

function updateStats() {
  scoreEl.textContent = state.score;

  streakEl.textContent =
    `${state.streak} 🔥`;

  /*
    index 从 0 开始，
    所以这里要 +1 才不会一开始显示 0。
  */

  const currentNumber =
    state.words.length > 0
      ? Math.min(state.index + 1, state.words.length)
      : 0;

  wordCount.textContent =
    `${currentNumber} / ${state.words.length || 20}`;
}


/* =========================
   Check Answer
========================= */

function checkAnswer(event) {
  event.preventDefault();

  if (state.answered) return;

  const answer =
    answerInput.value.trim().toLowerCase();

  if (!answer) {
    hint.textContent =
      "Type the word first ♡";

    answerInput.focus();
    return;
  }

  const item = currentWord();

  if (!item) return;

  const correct =
    answer === item.word.toLowerCase();

  state.answered = true;

  answerInput.disabled = true;

  $("answerForm").classList.add("hidden");
  $("skipButton").classList.add("hidden");

  feedback.classList.remove(
    "hidden",
    "correct",
    "wrong"
  );


  /* =========================
     Correct
  ========================= */

  if (correct) {

    state.streak += 1;

    state.score +=
      10 + Math.min(state.streak * 2, 20);

    feedback.classList.add("correct");

    feedbackIcon.textContent = "✓";

    feedbackTitle.textContent =
      state.streak >= 3
        ? "Amazing streak! 🎀"
        : "Correct! ✨";


    feedbackText.innerHTML =
      `<strong>${escapeHTML(item.word)}</strong> = ` +
      `${escapeHTML(item.meaning)}<br>` +
      `${escapeHTML(item.example)}<br>` +
      `${escapeHTML(item.translation)}`;


    message.textContent =
      "Added to your Revision Book 📖";

    addLearned(item);

  }


  /* =========================
     Wrong
  ========================= */

  else {

    state.streak = 0;

    feedback.classList.add("wrong");

    feedbackIcon.textContent = "!";

    feedbackTitle.textContent =
      "Not quite — that's okay ♡";


    feedbackText.innerHTML =
      `The answer is ` +
      `<strong>${escapeHTML(item.word)}</strong> = ` +
      `${escapeHTML(item.meaning)}<br>` +
      `${escapeHTML(item.example)}<br>` +
      `${escapeHTML(item.translation)}`;


    message.textContent =
      "You'll remember it next time!";
  }


  updateStats();

  nextButton.classList.remove("hidden");

  nextButton.textContent =
    state.index === state.words.length - 1
      ? "Finish quest ✨"
      : "Next word →";
}


/* =========================
   Add to Revision Book
========================= */

function addLearned(item) {

  const exists =
    state.learned.some(
      word => word.word === item.word
    );

  if (!exists) {

    state.learned.push({
      word: item.word,
      meaning: item.meaning,
      example: item.example,
      translation: item.translation
    });

    saveLearned();
  }
}


/* =========================
   Skip Word
========================= */

function skipWord() {

  if (state.answered) return;

  const item = currentWord();

  if (!item) return;

  state.streak = 0;
  state.answered = true;

  answerInput.disabled = true;

  $("answerForm").classList.add("hidden");
  $("skipButton").classList.add("hidden");


  feedback.classList.remove(
    "hidden",
    "correct",
    "wrong"
  );

  feedback.classList.add("wrong");

  feedbackIcon.textContent = "→";

  feedbackTitle.textContent =
    "Skipped";


  feedbackText.innerHTML =
    `The word was ` +
    `<strong>${escapeHTML(item.word)}</strong> = ` +
    `${escapeHTML(item.meaning)}<br>` +
    `${escapeHTML(item.example)}<br>` +
    `${escapeHTML(item.translation)}`;


  message.textContent =
    "No worries — learning takes repetition ♡";


  nextButton.classList.remove("hidden");

  nextButton.textContent =
    state.index === state.words.length - 1
      ? "Finish quest ✨"
      : "Next word →";


  updateStats();
}


/* =========================
   Next Word
========================= */

function nextWord() {

  if (!state.answered) return;

  if (
    state.index >=
    state.words.length - 1
  ) {
    showEnd();
    return;
  }

  state.index += 1;

  updateStats();

  showWord();
}


/* =========================
   End Game
========================= */

function showEnd() {

  $("finalScore").textContent =
    state.score;

  endDialog.showModal();
}


/* =========================
   Revision Book
========================= */

function renderBook() {

  const list = $("bookList");
  const empty = $("bookEmpty");

  list.innerHTML = "";


  if (state.learned.length === 0) {

    empty.classList.remove("hidden");

    return;
  }


  empty.classList.add("hidden");


  [...state.learned]
    .reverse()
    .forEach(item => {

      const card =
        document.createElement("article");

      card.className = "book-item";


      card.innerHTML = `
        <div class="book-word">
          <strong>${escapeHTML(item.word)}</strong>
          <span>${escapeHTML(item.meaning)}</span>
        </div>

        <p class="book-example">
          “${escapeHTML(item.example)}”
        </p>

        <p>
          ${escapeHTML(item.translation)}
        </p>
      `;


      list.appendChild(card);
    });
}


/* =========================
   Open Revision Book
========================= */

function openBook() {

  renderBook();

  bookDialog.showModal();
}


/* =========================
   Escape HTML
========================= */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* =========================
   Event Listeners
========================= */

$("answerForm")
  .addEventListener(
    "submit",
    checkAnswer
  );


$("skipButton")
  .addEventListener(
    "click",
    skipWord
  );


nextButton
  .addEventListener(
    "click",
    nextWord
  );


pronounceButton
  .addEventListener(
    "click",
    speakCurrentWord
  );


$("bookButton")
  .addEventListener(
    "click",
    openBook
  );


$("closeBook")
  .addEventListener(
    "click",
    () => bookDialog.close()
  );


$("playAgain")
  .addEventListener(
    "click",
    () => {

      endDialog.close();

      startGame();
    }
  );


$("openBookFromEnd")
  .addEventListener(
    "click",
    () => {

      endDialog.close();

      openBook();
    }
  );


/* =========================
   Escape Key
========================= */

document.addEventListener(
  "keydown",
  event => {

    if (event.key !== "Escape") return;


    if (bookDialog.open) {
      bookDialog.close();
    }


    if (endDialog.open) {
      endDialog.close();
    }
  }
);


/* =========================
   Start
========================= */

startGame();

  
