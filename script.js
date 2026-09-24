const WORDS = [
  {"word":"wander","zh":"漫步；闲逛","example":"I like to wander around the city when I have free time.","exampleZh":"我喜欢有空的时候在城市里到处逛逛。"},
  {"word":"curious","zh":"好奇的","example":"She was curious about what was inside the box.","exampleZh":"她很好奇盒子里面是什么。"},
  {"word":"awkward","zh":"尴尬的；笨拙的","example":"There was an awkward silence after his question.","exampleZh":"他问完问题后出现了一阵尴尬的沉默。"},
  {"word":"relieved","zh":"如释重负的；宽慰的","example":"I felt relieved when I found my lost wallet.","exampleZh":"找到丢失的钱包后，我松了一口气。"},
  {"word":"hesitate","zh":"犹豫","example":"Do not hesitate to ask if you need help.","exampleZh":"如果你需要帮助，不要犹豫，尽管开口。"},
  {"word":"delight","zh":"高兴；使愉快","example":"The little gift brought her great delight.","exampleZh":"这份小礼物给她带来了很大的快乐。"},
  {"word":"ordinary","zh":"普通的；平凡的","example":"It looked like an ordinary day at first.","exampleZh":"一开始，那看起来只是普通的一天。"},
  {"word":"notice","zh":"注意到；留意","example":"Did you notice the change in his voice?","exampleZh":"你注意到他的声音有什么变化吗？"},
  {"word":"improve","zh":"改善；提高","example":"Reading every day can improve your English.","exampleZh":"每天阅读可以提高你的英语。"},
  {"word":"confident","zh":"自信的","example":"She became more confident after practising.","exampleZh":"练习之后，她变得更加自信。"},
  {"word":"peculiar","zh":"奇怪的；独特的","example":"There was a peculiar smell in the room.","exampleZh":"房间里有一股奇怪的味道。"},
  {"word":"appreciate","zh":"欣赏；感激","example":"I really appreciate your help.","exampleZh":"我真的很感谢你的帮助。"},
  {"word":"destination","zh":"目的地","example":"We finally arrived at our destination.","exampleZh":"我们终于到达了我们的目的地。"},
  {"word":"genuine","zh":"真正的；真诚的","example":"Her smile looked completely genuine.","exampleZh":"她的笑容看起来非常真诚。"},
  {"word":"fortunate","zh":"幸运的","example":"I was fortunate enough to meet good friends.","exampleZh":"我很幸运能够遇到好朋友。"},
  {"word":"eventually","zh":"最终；终于","example":"He eventually found the answer.","exampleZh":"他最终找到了答案。"},
  {"word":"approach","zh":"接近；方法","example":"Winter is approaching quickly.","exampleZh":"冬天很快就要来了。"},
  {"word":"distract","zh":"使分心","example":"Music helps me when I need to focus and avoid distractions.","exampleZh":"当我需要专心时，音乐能帮助我避免分心。"},
  {"word":"remarkable","zh":"非凡的；值得注意的","example":"She made remarkable progress in a short time.","exampleZh":"她在短时间内取得了显著的进步。"},
  {"word":"event","zh":"事件；活动","example":"The school organised a special event.","exampleZh":"学校举办了一场特别的活动。"},
  {"word":"actually","zh":"实际上","example":"I actually enjoyed the quiet afternoon.","exampleZh":"其实我很享受那个安静的下午。"},
  {"word":"adventure","zh":"冒险；奇遇","example":"The trip turned into a small adventure.","exampleZh":"这趟旅行变成了一次小冒险。"},
  {"word":"afford","zh":"负担得起","example":"I cannot afford a new phone right now.","exampleZh":"我现在负担不起新手机。"},
  {"word":"ancient","zh":"古老的","example":"We visited an ancient temple.","exampleZh":"我们参观了一座古老的寺庙。"},
  {"word":"anxious","zh":"焦虑的；担心的","example":"She felt anxious before the interview.","exampleZh":"她面试前感到有些焦虑。"},
  {"word":"apologize","zh":"道歉","example":"I should apologize for being late.","exampleZh":"我应该为迟到道歉。"},
  {"word":"arrange","zh":"安排；整理","example":"We arranged the chairs in a circle.","exampleZh":"我们把椅子围成了一圈。"},
  {"word":"attempt","zh":"尝试","example":"He made another attempt to solve the puzzle.","exampleZh":"他又尝试了一次解决这个谜题。"},
  {"word":"avoid","zh":"避免","example":"I try to avoid using my phone before bed.","exampleZh":"我尽量避免睡前玩手机。"},
  {"word":"balance","zh":"平衡","example":"It is important to balance work and rest.","exampleZh":"平衡工作和休息很重要。"},
  {"word":"barely","zh":"勉强；几乎不","example":"I could barely hear the announcement.","exampleZh":"我几乎听不清那个通知。"},
  {"word":"benefit","zh":"益处；受益","example":"Walking can benefit your health.","exampleZh":"散步对健康有益。"},
  {"word":"brief","zh":"短暂的；简短的","example":"We had a brief conversation.","exampleZh":"我们进行了简短的交谈。"},
  {"word":"calm","zh":"平静的","example":"The lake looked calm in the morning.","exampleZh":"早晨的湖面看起来很平静。"},
  {"word":"capture","zh":"捕捉；记录","example":"She used her camera to capture the sunset.","exampleZh":"她用相机记录下了日落。"},
  {"word":"casual","zh":"随意的；休闲的","example":"He wore casual clothes to the picnic.","exampleZh":"他穿着休闲服去野餐。"},
  {"word":"celebrate","zh":"庆祝","example":"We went out to celebrate her birthday.","exampleZh":"我们出去庆祝她的生日。"},
  {"word":"certain","zh":"确定的；某个","example":"I am certain that I locked the door.","exampleZh":"我确定自己锁了门。"},
  {"word":"challenge","zh":"挑战","example":"Learning a new skill can be a fun challenge.","exampleZh":"学习新技能可以是一个有趣的挑战。"},
  {"word":"charming","zh":"迷人的","example":"The little café has a charming atmosphere.","exampleZh":"那家小咖啡馆有迷人的氛围。"},
  {"word":"cheerful","zh":"愉快的；开朗的","example":"She always sounds cheerful in the morning.","exampleZh":"她早上说话总是很愉快。"},
  {"word":"comfortable","zh":"舒服的；舒适的","example":"These shoes are comfortable enough for walking.","exampleZh":"这双鞋舒服得可以穿去散步。"},
  {"word":"complicated","zh":"复杂的","example":"The instructions looked more complicated than expected.","exampleZh":"说明看起来比想象中复杂。"},
  {"word":"convenient","zh":"方便的","example":"The shop is in a convenient location.","exampleZh":"那家店的位置很方便。"},
  {"word":"cozy","zh":"舒适温馨的","example":"The room feels cozy on rainy days.","exampleZh":"下雨天这个房间感觉很温馨。"},
  {"word":"creative","zh":"有创意的","example":"She found a creative way to decorate the box.","exampleZh":"她想出了一个有创意的方法装饰盒子。"},
  {"word":"crowded","zh":"拥挤的","example":"The train was crowded after work.","exampleZh":"下班后火车很拥挤。"},
  {"word":"decide","zh":"决定","example":"I cannot decide what to eat.","exampleZh":"我决定不了要吃什么。"},
  {"word":"describe","zh":"描述","example":"Can you describe the place to me?","exampleZh":"你可以向我描述一下那个地方吗？"},
  {"word":"discover","zh":"发现","example":"We discovered a quiet café nearby.","exampleZh":"我们发现附近有一家安静的咖啡馆。"},
  {"word":"eager","zh":"渴望的；热切的","example":"She was eager to try the new game.","exampleZh":"她很想试试那个新游戏。"},
  {"word":"efficient","zh":"高效的","example":"This shortcut is a more efficient way to get there.","exampleZh":"这条捷径是更高效的去法。"},
  {"word":"embarrassed","zh":"尴尬的","example":"I felt embarrassed when I forgot his name.","exampleZh":"我忘记他的名字时觉得很尴尬。"},
  {"word":"encounter","zh":"遇见；遭遇","example":"We had an unexpected encounter at the mall.","exampleZh":"我们在商场意外遇见了对方。"},
  {"word":"enormous","zh":"巨大的","example":"The museum has an enormous collection.","exampleZh":"那座博物馆有大量的收藏。"},
  {"word":"entire","zh":"整个的","example":"I spent the entire afternoon reading.","exampleZh":"我整个下午都在看书。"},
  {"word":"especially","zh":"尤其","example":"I like this café, especially its drinks.","exampleZh":"我喜欢这家咖啡馆，尤其是它的饮料。"},
  {"word":"essential","zh":"必要的；重要的","example":"Sleep is essential for a good day.","exampleZh":"睡眠对美好的一天很重要。"},
  {"word":"familiar","zh":"熟悉的","example":"Her voice sounded familiar.","exampleZh":"她的声音听起来很熟悉。"},
  {"word":"flexible","zh":"灵活的","example":"My schedule is quite flexible this week.","exampleZh":"我这周的时间安排比较灵活。"},
  {"word":"focus","zh":"专注；重点","example":"I need some quiet time to focus.","exampleZh":"我需要一点安静的时间来专心。"},
  {"word":"fragrant","zh":"芳香的","example":"The tea has a light, fragrant smell.","exampleZh":"这杯茶有淡淡的芳香。"},
  {"word":"frequent","zh":"频繁的","example":"He is a frequent visitor to this bookstore.","exampleZh":"他经常来这家书店。"},
  {"word":"generous","zh":"慷慨的","example":"She was generous with her time.","exampleZh":"她很愿意花时间帮助别人。"},
  {"word":"gentle","zh":"温柔的；轻柔的","example":"The breeze was gentle and cool.","exampleZh":"微风轻柔而凉爽。"},
  {"word":"grateful","zh":"感激的","example":"I am grateful for your kindness.","exampleZh":"我很感激你的善意。"},
  {"word":"gloomy","zh":"阴沉的；忧郁的","example":"The sky looked gloomy before the rain.","exampleZh":"下雨前天空看起来阴沉沉的。"},
  {"word":"graceful","zh":"优雅的","example":"The dancer made a graceful turn.","exampleZh":"舞者做了一个优雅的转身。"},
  {"word":"habit","zh":"习惯","example":"Reading before bed is a good habit.","exampleZh":"睡前阅读是个好习惯。"},
  {"word":"helpful","zh":"有帮助的","example":"Her advice was very helpful.","exampleZh":"她的建议很有帮助。"},
  {"word":"honest","zh":"诚实的","example":"Please be honest with me.","exampleZh":"请对我诚实。"},
  {"word":"imagine","zh":"想象","example":"Can you imagine living by the sea?","exampleZh":"你能想象住在海边吗？"},
  {"word":"impressive","zh":"令人印象深刻的","example":"The view from the hill was impressive.","exampleZh":"山上的景色令人印象深刻。"},
  {"word":"independent","zh":"独立的","example":"She enjoys travelling independently.","exampleZh":"她喜欢独立旅行。"},
  {"word":"inspire","zh":"激励；启发","example":"Her story inspired me to keep trying.","exampleZh":"她的故事激励我继续努力。"},
  {"word":"interesting","zh":"有趣的","example":"We had an interesting conversation.","exampleZh":"我们进行了一次有趣的谈话。"},
  {"word":"journey","zh":"旅程","example":"The journey took three hours.","exampleZh":"这段旅程花了三个小时。"},
  {"word":"kindness","zh":"善意；好心","example":"A little kindness can brighten someone's day.","exampleZh":"一点善意就能让某人的一天变得更美好。"},
  {"word":"lively","zh":"活泼的；热闹的","example":"The night market is lively at night.","exampleZh":"夜市晚上很热闹。"},
  {"word":"lonely","zh":"孤单的","example":"He felt lonely in the new city.","exampleZh":"他在新城市里感到孤单。"},
  {"word":"luxury","zh":"奢侈；奢华","example":"A quiet afternoon feels like a luxury sometimes.","exampleZh":"有时一个安静的下午就像一种奢侈。"},
  {"word":"mature","zh":"成熟的","example":"She gave a mature response.","exampleZh":"她给出了成熟的回应。"},
  {"word":"memorable","zh":"难忘的","example":"It was a memorable weekend.","exampleZh":"那是一个难忘的周末。"},
  {"word":"mysterious","zh":"神秘的","example":"There was a mysterious note on the table.","exampleZh":"桌上有一张神秘的纸条。"},
  {"word":"natural","zh":"自然的","example":"She has a natural way of making people laugh.","exampleZh":"她很自然地就能逗人发笑。"},
  {"word":"neat","zh":"整洁的；利落的","example":"His desk is always neat.","exampleZh":"他的桌子总是很整洁。"},
  {"word":"obvious","zh":"明显的","example":"The answer became obvious after a while.","exampleZh":"过了一会儿答案就明显了。"},
  {"word":"patient","zh":"耐心的","example":"Thank you for being patient with me.","exampleZh":"谢谢你对我有耐心。"},
  {"word":"peaceful","zh":"平静的","example":"The garden is peaceful in the early morning.","exampleZh":"花园清晨十分宁静。"},
    {"word":"pleasant","zh":"愉快的；宜人的","example":"We had a pleasant afternoon together.","exampleZh":"我们一起度过了愉快的下午。"},
  {"word":"precious","zh":"珍贵的","example":"This photo is precious to me.","exampleZh":"这张照片对我来说很珍贵。"},
  {"word":"prepare","zh":"准备","example":"I need to prepare for tomorrow.","exampleZh":"我需要为明天做准备。"},
  {"word":"prevent","zh":"预防；阻止","example":"Wearing a helmet can prevent serious injuries.","exampleZh":"戴头盔可以预防严重伤害。"},
  {"word":"probably","zh":"可能；大概","example":"She will probably arrive soon.","exampleZh":"她可能很快就到了。"},
  {"word":"proper","zh":"适当的；正确的","example":"Make sure you use the proper equipment.","exampleZh":"确保你使用正确的设备。"},
  {"word":"rare","zh":"罕见的；稀有的","example":"It is rare to see snow in Malaysia.","exampleZh":"在马来西亚看到雪很罕见。"},
  {"word":"reasonable","zh":"合理的","example":"That sounds like a reasonable idea.","exampleZh":"那听起来是个合理的想法。"},
  {"word":"recommend","zh":"推荐","example":"I would recommend this restaurant.","exampleZh":"我会推荐这家餐厅。"},
  {"word":"reduce","zh":"减少","example":"We should reduce unnecessary spending.","exampleZh":"我们应该减少不必要的开销。"},
  {"word":"reliable","zh":"可靠的","example":"She is a reliable friend.","exampleZh":"她是一个可靠的朋友。"},
  {"word":"remain","zh":"保持；留下","example":"Please remain calm.","exampleZh":"请保持冷静。"},
  {"word":"replace","zh":"替换；取代","example":"I need to replace my old bag.","exampleZh":"我需要换掉我的旧包。"},
  {"word":"require","zh":"需要；要求","example":"This job requires good communication skills.","exampleZh":"这份工作需要良好的沟通能力。"},
  {"word":"respect","zh":"尊重","example":"We should respect other people's opinions.","exampleZh":"我们应该尊重别人的意见。"},
  {"word":"responsible","zh":"负责的","example":"She is responsible for organising the event.","exampleZh":"她负责组织这个活动。"},
  {"word":"routine","zh":"日常；惯例","example":"My morning routine is quite simple.","exampleZh":"我的晨间日常很简单。"},
  {"word":"satisfying","zh":"令人满意的","example":"Finishing the project felt satisfying.","exampleZh":"完成这个项目让人很有满足感。"},
  {"word":"sensible","zh":"明智的；合理的","example":"That seems like a sensible choice.","exampleZh":"那似乎是个明智的选择。"},
  {"word":"sincere","zh":"真诚的","example":"She gave me a sincere apology.","exampleZh":"她真诚地向我道歉。"},
  {"word":"slightly","zh":"稍微；略微","example":"The room is slightly colder today.","exampleZh":"今天房间稍微冷了一点。"},
  {"word":"smooth","zh":"顺利的；平滑的","example":"Everything went smoothly.","exampleZh":"一切都进行得很顺利。"},
  {"word":"specific","zh":"具体的；特定的","example":"Can you give me a specific example?","exampleZh":"你可以给我一个具体的例子吗？"},
  {"word":"stubborn","zh":"固执的","example":"He can be quite stubborn sometimes.","exampleZh":"他有时候会比较固执。"},
  {"word":"sudden","zh":"突然的","example":"There was a sudden change in the weather.","exampleZh":"天气突然发生了变化。"},
  {"word":"suitable","zh":"合适的","example":"This dress is suitable for the occasion.","exampleZh":"这件裙子适合这个场合。"},
  {"word":"supportive","zh":"支持的；给予支持的","example":"My family has always been supportive.","exampleZh":"我的家人一直都很支持我。"},
  {"word":"surround","zh":"围绕","example":"The house is surrounded by trees.","exampleZh":"房子周围都是树。"},
  {"word":"temporary","zh":"暂时的","example":"This is only a temporary solution.","exampleZh":"这只是暂时的解决办法。"},
  {"word":"thoughtful","zh":"体贴的；深思熟虑的","example":"That was very thoughtful of you.","exampleZh":"你真的很体贴。"},
  {"word":"traditional","zh":"传统的","example":"We tried some traditional food.","exampleZh":"我们尝试了一些传统食物。"},
  {"word":"unique","zh":"独特的","example":"Every place has its own unique character.","exampleZh":"每个地方都有自己独特的特色。"},
  {"word":"valuable","zh":"有价值的；宝贵的","example":"Experience can be more valuable than money.","exampleZh":"经验有时比金钱更宝贵。"},
  {"word":"various","zh":"各种各样的","example":"The shop sells various kinds of snacks.","exampleZh":"这家店卖各种各样的零食。"},
  {"word":"visible","zh":"可见的","example":"The mountains were clearly visible from here.","exampleZh":"从这里可以清楚地看到山。"},
  {"word":"wonderful","zh":"精彩的；美好的","example":"We had a wonderful time.","exampleZh":"我们度过了一段美好的时光。"},
  {"word":"accurate","zh":"准确的","example":"Please make sure the information is accurate.","exampleZh":"请确保信息准确。"},
  {"word":"adapt","zh":"适应；调整","example":"It took me some time to adapt to the new routine.","exampleZh":"我花了一些时间适应新的日常。"},
  {"word":"admire","zh":"欣赏；钦佩","example":"I really admire her creativity.","exampleZh":"我很欣赏她的创造力。"},
  {"word":"advantage","zh":"优势；好处","example":"One advantage of studying online is flexibility.","exampleZh":"线上学习的一个优势是灵活。"},
  {"word":"alternative","zh":"替代选择","example":"We need to find an alternative solution.","exampleZh":"我们需要找到另一个解决办法。"},
  {"word":"ambitious","zh":"有抱负的","example":"She has ambitious plans for the future.","exampleZh":"她对未来有很大的计划。"},
  {"word":"anticipate","zh":"预期；预料","example":"We anticipate a busy weekend.","exampleZh":"我们预计周末会很忙。"},
  {"word":"apparent","zh":"明显的","example":"It became apparent that we needed more time.","exampleZh":"很明显我们需要更多时间。"},
  {"word":"appropriate","zh":"适当的","example":"Wear something appropriate for the weather.","exampleZh":"穿适合天气的衣服。"},
  {"word":"artificial","zh":"人工的；人造的","example":"The flowers look almost real, but they are artificial.","exampleZh":"这些花看起来几乎是真的，但其实是人造的。"},
  {"word":"atmosphere","zh":"气氛；氛围","example":"The café has a relaxing atmosphere.","exampleZh":"这家咖啡馆有轻松的氛围。"},
  {"word":"attractive","zh":"有吸引力的","example":"The design is simple but attractive.","exampleZh":"这个设计简单但很有吸引力。"},
  {"word":"authentic","zh":"真实的；正宗的","example":"The restaurant serves authentic local food.","exampleZh":"这家餐厅提供正宗的本地食物。"},
  {"word":"aware","zh":"意识到的","example":"Are you aware of the changes?","exampleZh":"你知道这些变化吗？"},
  {"word":"beneficial","zh":"有益的","example":"Regular reading is beneficial for language learning.","exampleZh":"定期阅读对语言学习有益。"},
  {"word":"brilliant","zh":"出色的；聪明的","example":"That was a brilliant idea.","exampleZh":"那是个很棒的想法。"},
  {"word":"capable","zh":"有能力的","example":"She is capable of solving the problem herself.","exampleZh":"她有能力自己解决这个问题。"},
  {"word":"considerable","zh":"相当大的；可观的","example":"The project requires considerable effort.","exampleZh":"这个项目需要相当大的努力。"},
  {"word":"consistent","zh":"一致的；持续的","example":"Consistent practice can improve your skills.","exampleZh":"持续练习可以提高你的技能。"},
  {"word":"contribute","zh":"贡献；促成","example":"Everyone can contribute something useful.","exampleZh":"每个人都可以贡献一些有用的东西。"},
  {"word":"convince","zh":"说服","example":"She convinced me to give it another try.","exampleZh":"她说服我再试一次。"},
  {"word":"cooperate","zh":"合作","example":"We need to cooperate to finish the project.","exampleZh":"我们需要合作完成这个项目。"},
  {"word":"curiosity","zh":"好奇心","example":"Curiosity helps us learn new things.","exampleZh":"好奇心帮助我们学习新事物。"},
  {"word":"decline","zh":"下降；拒绝","example":"She politely declined the invitation.","exampleZh":"她礼貌地拒绝了邀请。"},
  {"word":"demonstrate","zh":"展示；证明","example":"The teacher demonstrated how to use the machine.","exampleZh":"老师示范了如何使用这台机器。"},
  {"word":"depend","zh":"取决于；依靠","example":"The final price depends on the size.","exampleZh":"最终价格取决于尺寸。"},
  {"word":"deserve","zh":"值得","example":"You deserve a break after all that work.","exampleZh":"做了这么多工作后，你值得休息一下。"},
  {"word":"determine","zh":"决定；确定","example":"The results will determine what happens next.","exampleZh":"结果将决定接下来会发生什么。"},
  {"word":"distinct","zh":"明显不同的；独特的","example":"The two flavours are quite distinct.","exampleZh":"这两种味道明显不同。"},
  {"word":"diverse","zh":"多样的","example":"Malaysia has a diverse food culture.","exampleZh":"马来西亚拥有多元的饮食文化。"},
  {"word":"dramatic","zh":"戏剧性的；巨大的","example":"There was a dramatic change in the weather.","exampleZh":"天气发生了巨大的变化。"},
  {"word":"effective","zh":"有效的","example":"This method is simple and effective.","exampleZh":"这个方法简单又有效。"},
  {"word":"emphasize","zh":"强调","example":"The teacher emphasized the importance of practice.","exampleZh":"老师强调了练习的重要性。"},
  {"word":"encourage","zh":"鼓励","example":"My friends encourage me to keep learning.","exampleZh":"我的朋友鼓励我继续学习。"},
  {"word":"essentially","zh":"本质上；基本上","example":"The two ideas are essentially the same.","exampleZh":"这两个想法本质上是一样的。"},
  {"word":"estimate","zh":"估计","example":"Can you estimate how long it will take?","exampleZh":"你能估计需要多久吗？"},
  {"word":"evaluate","zh":"评估","example":"We need to evaluate the results carefully.","exampleZh":"我们需要仔细评估结果。"},
  {"word":"evident","zh":"明显的","example":"Her excitement was evident.","exampleZh":"她的兴奋显而易见。"},
  {"word":"exceed","zh":"超过","example":"The final cost exceeded my budget.","exampleZh":"最终费用超过了我的预算。"},
  {"word":"expand","zh":"扩大；扩展","example":"The business plans to expand next year.","exampleZh":"这家企业计划明年扩大规模。"},
  {"word":"explore","zh":"探索","example":"We spent the afternoon exploring the old town.","exampleZh":"我们花了一个下午探索老城区。"},
  {"word":"extraordinary","zh":"非凡的；特别的","example":"She has an extraordinary talent for drawing.","exampleZh":"她有非凡的绘画天赋。"},
  {"word":"fascinating","zh":"迷人的；极有趣的","example":"I find the history of this place fascinating.","exampleZh":"我觉得这个地方的历史非常有趣。"},
  {"word":"flexibility","zh":"灵活性","example":"The job offers a lot of flexibility.","exampleZh":"这份工作提供了很大的灵活性。"},
  {"word":"fortunate","zh":"幸运的","example":"We were fortunate to have good weather.","exampleZh":"我们很幸运遇到了好天气。"},
  {"word":"frequently","zh":"经常地","example":"She frequently visits the library.","exampleZh":"她经常去图书馆。"},
  {"word":"genuine","zh":"真正的；真诚的","example":"His concern seemed genuine.","exampleZh":"他的关心似乎是真诚的。"},
  {"word":"gradually","zh":"逐渐地","example":"Her confidence gradually improved.","exampleZh":"她的自信逐渐提高了。"},
  {"word":"hesitation","zh":"犹豫","example":"After a moment of hesitation, she answered.","exampleZh":"犹豫了一会儿后，她回答了。"},
  {"word":"identify","zh":"识别；确定","example":"Can you identify the problem?","exampleZh":"你能找出问题吗？"},
  {"word":"ignore","zh":"忽视","example":"It is difficult to ignore the noise.","exampleZh":"很难忽视那些噪音。"},
  {"word":"illustrate","zh":"说明；阐明","example":"This example illustrates the idea clearly.","exampleZh":"这个例子清楚地说明了这个想法。"},
  {"word":"imply","zh":"暗示；意味着","example":"His words seemed to imply something else.","exampleZh":"他的话似乎暗示了其他事情。"},
  {"word":"inevitable","zh":"不可避免的","example":"Change is inevitable.","exampleZh":"变化是不可避免的。"},
  {"word":"influence","zh":"影响","example":"Friends can influence our choices.","exampleZh":"朋友可能会影响我们的选择。"},
  {"word":"initial","zh":"最初的","example":"My initial plan was completely different.","exampleZh":"我最初的计划完全不同。"},
  {"word":"maintain","zh":"维持；保持","example":"It is important to maintain a healthy routine.","exampleZh":"保持健康的日常习惯很重要。"},
  {"word":"meaningful","zh":"有意义的","example":"We had a meaningful conversation.","exampleZh":"我们进行了一次有意义的谈话。"},
  {"word":"notable","zh":"值得注意的；显著的","example":"There has been a notable improvement.","exampleZh":"已经有了明显的进步。"},
  {"word":"optimistic","zh":"乐观的","example":"She remains optimistic about the future.","exampleZh":"她对未来仍然保持乐观。"},
  {"word":"overcome","zh":"克服","example":"He worked hard to overcome his fear.","exampleZh":"他努力克服自己的恐惧。"},
  {"word":"productive","zh":"有效率的；有成果的","example":"I had a productive morning.","exampleZh":"我度过了一个很有成效的早晨。"},
  {"word":"resilient","zh":"有韧性的；坚韧的","example":"She is resilient when facing difficulties.","exampleZh":"面对困难时她很坚韧。"},
  {"word":"satisfying","zh":"令人满足的","example":"Finishing a difficult task can be satisfying.","exampleZh":"完成困难的任务会让人很有满足感。"},
  {"word":"thoughtfully","zh":"体贴地；认真地","example":"She thoughtfully prepared a small gift.","exampleZh":"她贴心地准备了一份小礼物。"},
  {"word":"tranquil","zh":"宁静的","example":"The beach was tranquil in the early morning.","exampleZh":"清晨的海滩十分宁静。"},
  {"word":"vibrant","zh":"充满活力的；鲜艳的","example":"The city has a vibrant culture.","exampleZh":"这座城市有充满活力的文化。"},
  {"word":"widespread","zh":"广泛的","example":"The tradition is widespread across the region.","exampleZh":"这个传统在该地区广泛流传。"},
  {"word":"yearn","zh":"渴望；向往","example":"She yearned for a quiet holiday.","exampleZh":"她向往一个安静的假期。"},
  {"word":"accompany","zh":"陪伴","example":"Would you like me to accompany you?","exampleZh":"你想让我陪你一起去吗？"},
  {"word":"allocate","zh":"分配","example":"We need to allocate enough time for the project.","exampleZh":"我们需要为这个项目分配足够的时间。"},
  {"word":"assure","zh":"保证；使放心","example":"I assure you that everything is fine.","exampleZh":"我向你保证一切都很好。"},
  {"word":"boost","zh":"提升；促进","example":"A short walk can boost my mood.","exampleZh":"短暂散步可以改善我的心情。"},
  {"word":"contemplate","zh":"仔细考虑","example":"She sat quietly and contemplated her next step.","exampleZh":"她安静地坐着思考下一步。"},
{"word":"coordinate","zh":"协调","example":"We need to coordinate our plans.","exampleZh":"我们需要协调我们的计划。"},
  {"word":"devote","zh":"投入；奉献","example":"She devotes her free time to drawing.","exampleZh":"她把空闲时间投入到绘画中。"},
  {"word":"distinguish","zh":"区分；辨别","example":"It can be difficult to distinguish the two sounds.","exampleZh":"区分这两个声音可能很困难。"},
  {"word":"embrace","zh":"拥抱；接受","example":"She decided to embrace the change.","exampleZh":"她决定接受这个变化。"},
  {"word":"enhance","zh":"增强；改善","example":"Music can enhance the atmosphere.","exampleZh":"音乐可以增强氛围。"},
  {"word":"anticipate","zh":"预期；预料","example":"We anticipate some changes next month.","exampleZh":"我们预计下个月会有一些变化。"},
  {"word":"clarify","zh":"澄清；说明","example":"Could you clarify what you mean?","exampleZh":"你可以说明一下你的意思吗？"},
  {"word":"compelling","zh":"引人注目的；令人信服的","example":"She gave a compelling reason for her decision.","exampleZh":"她为自己的决定给出了令人信服的理由。"},
  {"word":"comprehensive","zh":"全面的","example":"The guide provides a comprehensive overview.","exampleZh":"这份指南提供了全面的概述。"},
  {"word":"concentrate","zh":"集中注意力","example":"It is easier to concentrate in a quiet room.","exampleZh":"在安静的房间里更容易集中注意力。"},
  {"word":"confidently","zh":"自信地","example":"She answered the question confidently.","exampleZh":"她自信地回答了问题。"},
  {"word":"consequence","zh":"后果","example":"Every decision has a consequence.","exampleZh":"每个决定都有后果。"},
  {"word":"considerate","zh":"体贴的；为他人着想的","example":"It was considerate of her to check on me.","exampleZh":"她来关心我真的很体贴。"},
  {"word":"consistent","zh":"一致的；持续的","example":"Consistent effort usually brings results.","exampleZh":"持续的努力通常会带来成果。"},
  {"word":"constructive","zh":"建设性的","example":"He gave me some constructive feedback.","exampleZh":"他给了我一些有建设性的反馈。"},
  {"word":"consume","zh":"消耗；消费","example":"This device consumes very little energy.","exampleZh":"这个设备消耗的能源很少。"},
  {"word":"convincing","zh":"令人信服的","example":"Her explanation was convincing.","exampleZh":"她的解释很有说服力。"},
  {"word":"crucial","zh":"至关重要的","example":"Good communication is crucial in teamwork.","exampleZh":"良好的沟通在团队合作中至关重要。"},
  {"word":"dedicate","zh":"投入；奉献","example":"She decided to dedicate more time to learning.","exampleZh":"她决定投入更多时间学习。"},
  {"word":"deliberate","zh":"故意的；深思熟虑的","example":"It was a deliberate decision.","exampleZh":"这是一个经过深思熟虑的决定。"},
  {"word":"demonstration","zh":"示范；演示","example":"The teacher gave us a demonstration.","exampleZh":"老师给我们做了一次示范。"},
  {"word":"derive","zh":"获得；源于","example":"Many words derive from older languages.","exampleZh":"许多词源自更古老的语言。"},
  {"word":"efficiently","zh":"高效地","example":"She completed the task efficiently.","exampleZh":"她高效地完成了任务。"},
  {"word":"encountered","zh":"遇到；遭遇","example":"We encountered several problems during the trip.","exampleZh":"旅行期间我们遇到了几个问题。"},
  {"word":"enthusiastic","zh":"热情的","example":"She is enthusiastic about learning languages.","exampleZh":"她对学习语言很有热情。"},
  {"word":"essentially","zh":"本质上；基本上","example":"The two plans are essentially identical.","exampleZh":"这两个计划本质上几乎一样。"},
  {"word":"examine","zh":"检查；仔细研究","example":"The doctor examined the patient carefully.","exampleZh":"医生仔细检查了病人。"},
  {"word":"exceptional","zh":"杰出的；非凡的","example":"She showed exceptional creativity.","exampleZh":"她展现出了非凡的创造力。"},
  {"word":"exhausted","zh":"筋疲力尽的","example":"I was exhausted after the long day.","exampleZh":"漫长的一天后我筋疲力尽。"},
  {"word":"favourable","zh":"有利的；令人满意的","example":"The weather conditions were favourable.","exampleZh":"天气条件很有利。"},
  {"word":"frequently","zh":"经常地","example":"He frequently visits his grandparents.","exampleZh":"他经常去看望祖父母。"},
  {"word":"fundamental","zh":"基本的；根本的","example":"Trust is fundamental to a good relationship.","exampleZh":"信任是良好关系的基础。"},
  {"word":"genuinely","zh":"真诚地；真正地","example":"She genuinely wanted to help.","exampleZh":"她是真心想帮忙的。"},
  {"word":"gradual","zh":"逐渐的","example":"There was a gradual improvement.","exampleZh":"情况逐渐改善了。"},
  {"word":"highlight","zh":"突出；重点","example":"The guide highlights several interesting places.","exampleZh":"这份指南重点介绍了几个有趣的地方。"},
  {"word":"implement","zh":"实施；执行","example":"The school plans to implement a new system.","exampleZh":"学校计划实施一个新系统。"},
  {"word":"imply","zh":"暗示；意味着","example":"His expression seemed to imply something.","exampleZh":"他的表情似乎暗示了什么。"},
  {"word":"incredible","zh":"难以置信的；极好的","example":"The view was absolutely incredible.","exampleZh":"景色简直令人难以置信。"},
  {"word":"indicate","zh":"表明；指出","example":"The sign indicates the direction.","exampleZh":"这个标志指出了方向。"},
  {"word":"inevitable","zh":"不可避免的","example":"Mistakes are sometimes inevitable.","exampleZh":"错误有时是不可避免的。"},
  {"word":"innovative","zh":"创新的","example":"The company created an innovative product.","exampleZh":"这家公司创造了一款创新产品。"},
  {"word":"interpret","zh":"解释；理解","example":"People may interpret the message differently.","exampleZh":"人们可能会以不同方式理解这条信息。"},
  {"word":"justify","zh":"证明……合理；为……辩解","example":"Can you justify your decision?","exampleZh":"你能说明你的决定为什么合理吗？"},
  {"word":"logical","zh":"合乎逻辑的","example":"That sounds like a logical explanation.","exampleZh":"那听起来是一个合乎逻辑的解释。"},
  {"word":"nevertheless","zh":"然而；尽管如此","example":"It was difficult; nevertheless, we continued.","exampleZh":"这很困难，但我们还是继续了。"},
  {"word":"noteworthy","zh":"值得注意的","example":"Her progress is noteworthy.","exampleZh":"她的进步值得注意。"},
  {"word":"objective","zh":"目标；客观的","example":"Our main objective is to finish the project.","exampleZh":"我们的主要目标是完成这个项目。"},
  {"word":"obtain","zh":"获得","example":"You need to obtain permission first.","exampleZh":"你需要先获得许可。"},
  {"word":"occasionally","zh":"偶尔","example":"I occasionally go for a walk at night.","exampleZh":"我偶尔晚上出去散步。"},
  {"word":"persistent","zh":"坚持不懈的；持续的","example":"Her persistent effort paid off.","exampleZh":"她坚持不懈的努力得到了回报。"},
  {"word":"perspective","zh":"观点；角度","example":"Try to see the situation from another perspective.","exampleZh":"试着从另一个角度看这个情况。"},
  {"word":"potential","zh":"潜力；潜在的","example":"She has a lot of potential.","exampleZh":"她有很大的潜力。"},
  {"word":"precisely","zh":"准确地；正是","example":"That is precisely what I meant.","exampleZh":"那正是我的意思。"},
  {"word":"priority","zh":"优先事项","example":"Your health should be a priority.","exampleZh":"你的健康应该是优先考虑的事情。"},
  {"word":"profound","zh":"深刻的","example":"The book had a profound effect on me.","exampleZh":"这本书对我产生了深刻的影响。"},
  {"word":"promising","zh":"有前途的；有希望的","example":"The young artist shows promising talent.","exampleZh":"这位年轻艺术家展现出了很有前途的才华。"},
  {"word":"recognize","zh":"认出；意识到","example":"I did not recognize him at first.","exampleZh":"我一开始没有认出他。"},
  {"word":"relevant","zh":"相关的","example":"Please include only relevant information.","exampleZh":"请只包括相关的信息。"},
  {"word":"reluctant","zh":"不情愿的","example":"She was reluctant to make a decision.","exampleZh":"她不太愿意做决定。"},
  {"word":"remarkably","zh":"显著地；非常","example":"The situation improved remarkably.","exampleZh":"情况有了非常明显的改善。"},
  {"word":"significant","zh":"重要的；显著的","example":"There has been a significant change.","exampleZh":"发生了明显的变化。"},
  {"word":"sufficient","zh":"足够的","example":"We have sufficient time to finish.","exampleZh":"我们有足够的时间完成。"},
  {"word":"temporary","zh":"暂时的","example":"The problem is only temporary.","exampleZh":"这个问题只是暂时的。"},
  {"word":"thorough","zh":"彻底的；全面的","example":"She gave the room a thorough cleaning.","exampleZh":"她把房间彻底打扫了一遍。"},
  {"word":"transform","zh":"改变；转变","example":"The renovation transformed the old room.","exampleZh":"装修改变了这个旧房间。"},
  {"word":"ultimately","zh":"最终","example":"Ultimately, the decision is yours.","exampleZh":"最终决定权在你。"},
  {"word":"unexpected","zh":"意外的","example":"We received an unexpected gift.","exampleZh":"我们收到了一份意外的礼物。"},
  {"word":"valuable","zh":"有价值的；宝贵的","example":"This experience was extremely valuable.","exampleZh":"这次经历非常宝贵。"},
  {"word":"versatile","zh":"多用途的；多才多艺的","example":"This bag is versatile and practical.","exampleZh":"这个包用途很多而且实用。"},
  {"word":"vivid","zh":"生动的；鲜明的","example":"I still have a vivid memory of that day.","exampleZh":"我仍然清楚地记得那一天。"},
  {"word":"willing","zh":"愿意的","example":"She is willing to learn new things.","exampleZh":"她愿意学习新东西。"},
  {"word":"abundant","zh":"丰富的；充足的","example":"The area has abundant natural resources.","exampleZh":"这个地区拥有丰富的自然资源。"},
  {"word":"accomplish","zh":"完成；实现","example":"She worked hard to accomplish her goal.","exampleZh":"她努力实现自己的目标。"},
  {"word":"adequate","zh":"足够的；适当的","example":"Make sure you get adequate rest.","exampleZh":"确保你得到足够的休息。"},
  {"word":"appreciation","zh":"欣赏；感激","example":"She expressed her appreciation for the gift.","exampleZh":"她表达了对这份礼物的感谢。"},
  {"word":"assumption","zh":"假设；认为","example":"That is only an assumption.","exampleZh":"那只是一种假设。"},
  {"word":"boost","zh":"提升；促进","example":"The good news gave me a boost of confidence.","exampleZh":"这个好消息让我更有信心。"},
  {"word":"compassion","zh":"同情；关怀","example":"She treated everyone with compassion.","exampleZh":"她以关怀的态度对待每个人。"},
  {"word":"coordinate","zh":"协调","example":"We need to coordinate the schedule.","exampleZh":"我们需要协调时间表。"},
  {"word":"devote","zh":"投入；奉献","example":"He devoted years to the project.","exampleZh":"他多年投入于这个项目。"},
  {"word":"distinguish","zh":"区分；辨别","example":"It is difficult to distinguish the twins.","exampleZh":"很难区分这对双胞胎。"},
  {"word":"enhance","zh":"增强；改善","example":"This feature enhances the user experience.","exampleZh":"这个功能改善了用户体验。"},
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
const bookDialog = $("bookDialog");
const endDialog = $("endDialog");

function loadLearned() {
  try {
    return JSON.parse(localStorage.getItem("pinkkitty-learned") || "[]");
  } catch {
    return [];
  }
}

function saveLearned() {
  localStorage.setItem("pinkkitty-learned", JSON.stringify(state.learned));
}

function shuffle(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function currentWord() {
  return state.words[state.index];
}

function startGame() {
  state.words = shuffle(WORDS);
  state.index = 0;
  state.score = 0;
  state.streak = 0;
  state.answered = false;
  updateStats();
  showWord();
}

function showWord() {
  const item = currentWord();
  state.answered = false;

  targetWord.textContent = item.word;
  hint.textContent = "Take a guess — you've got this!";
  answerInput.value = "";
  answerInput.disabled = false;
  $("answerForm").classList.remove("hidden");
  $("skipButton").classList.remove("hidden");
  feedback.classList.add("hidden");
  nextButton.classList.add("hidden");

  const number = state.index + 1;
  progressText.textContent = `Word ${number} of ${state.words.length}`;
  progressBar.style.width = `${(number / state.words.length) * 100}%`;
  message.textContent = state.streak > 1 ? `${state.streak} in a row! ✨` : "Take your time ♡";

  requestAnimationFrame(() => answerInput.focus());
}

function updateStats() {
  scoreEl.textContent = state.score;
  streakEl.textContent = `${state.streak} 🔥`;
  wordCount.textContent = `${Math.min(state.index, state.words.length)} / ${state.words.length || 20}`;
}

function checkAnswer(event) {
  event.preventDefault();
  if (state.answered) return;

  const answer = answerInput.value.trim().toLowerCase();

  if (!answer) {
    hint.textContent = "Type the word first ♡";
    answerInput.focus();
    return;
  }

  const item = currentWord();
  const correct = answer === item.word.toLowerCase();

  state.answered = true;
  answerInput.disabled = true;
  $("answerForm").classList.add("hidden");
  $("skipButton").classList.add("hidden");

  feedback.classList.remove("hidden", "correct", "wrong");

  if (correct) {
    state.streak += 1;
    state.score += 10 + Math.min(state.streak * 2, 20);

    feedback.classList.add("correct");
    feedbackIcon.textContent = "✓";
    feedbackTitle.textContent = state.streak >= 3 ? "Amazing streak! 🎀" : "Correct! ✨";

    feedbackText.innerHTML =
      `<strong>${item.word}</strong> = ${item.meaning}<br>` +
      `${item.example}<br>${item.translation}`;

    message.textContent = "Added to your Revision Book 📖";
    addLearned(item);

  } else {
    state.streak = 0;

    feedback.classList.add("wrong");
    feedbackIcon.textContent = "!";
    feedbackTitle.textContent = "Not quite — that's okay ♡";

    feedbackText.innerHTML =
      `The answer is <strong>${item.word}</strong> = ${item.meaning}<br>` +
      `${item.example}<br>${item.translation}`;

    message.textContent = "You'll remember it next time!";
  }

  updateStats();

  nextButton.classList.remove("hidden");
  nextButton.textContent =
    state.index === state.words.length - 1
      ? "Finish quest ✨"
      : "Next word →";
}

function addLearned(item) {
  if (!state.learned.some(w => w.word === item.word)) {
    state.learned.push(item);
    saveLearned();
  }
}

function skipWord() {
  if (state.answered) return;

  state.streak = 0;
  state.answered = true;

  answerInput.disabled = true;
  $("answerForm").classList.add("hidden");
  $("skipButton").classList.add("hidden");

  const item = currentWord();

  feedback.classList.remove("hidden", "correct", "wrong");
  feedback.classList.add("wrong");

  feedbackIcon.textContent = "→";
  feedbackTitle.textContent = "Skipped";

  feedbackText.innerHTML =
    `The word was <strong>${item.word}</strong> = ${item.meaning}<br>` +
    `${item.example}<br>${item.translation}`;

  message.textContent = "No worries — learning takes repetition ♡";

  nextButton.classList.remove("hidden");
  nextButton.textContent =
    state.index === state.words.length - 1
      ? "Finish quest ✨"
      : "Next word →";

  updateStats();
}

function nextWord() {
  if (!state.answered) return;

  if (state.index >= state.words.length - 1) {
    showEnd();
    return;
  }

  state.index += 1;
  updateStats();
  showWord();
}

function showEnd() {
  $("finalScore").textContent = state.score;
  endDialog.showModal();
}

function renderBook() {
  const list = $("bookList");
  const empty = $("bookEmpty");

  list.innerHTML = "";

  if (state.learned.length === 0) {
    empty.classList.remove("hidden");
    return;
  }

  empty.classList.add("hidden");

  [...state.learned].reverse().forEach(item => {
    const card = document.createElement("article");
    card.className = "book-item";

    card.innerHTML = `
      <div class="book-word">
        <strong>${escapeHTML(item.word)}</strong>
        <span>${escapeHTML(item.meaning)}</span>
      </div>
      <p class="book-example">“${escapeHTML(item.example)}”</p>
      <p>${escapeHTML(item.translation)}</p>
    `;

    list.appendChild(card);
  });
}

function openBook() {
  renderBook();
  bookDialog.showModal();
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

$("answerForm").addEventListener("submit", checkAnswer);
$("skipButton").addEventListener("click", skipWord);
nextButton.addEventListener("click", nextWord);

$("bookButton").addEventListener("click", openBook);
$("closeBook").addEventListener("click", () => bookDialog.close());

$("playAgain").addEventListener("click", () => {
  endDialog.close();
  startGame();
});

$("openBookFromEnd").addEventListener("click", () => {
  endDialog.close();
  openBook();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    if (bookDialog.open) bookDialog.close();
    if (endDialog.open) endDialog.close();
  }
});

startGame();
