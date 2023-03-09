const ObjectId = require('mongo-objectid');

export const DummyTriggerQuestions = [
	{
		category: 'Sports',
		question:
			'"Tom Brady would have won the next Superbowl if he had not retired',
		upvotes: [],
		downvotes: [],
		discussions: [],
		relatedArticles: [
			{
				featured: false,
				title:
					'A comprehensive timeline of Tom Bradys tumultuous season in Tampa Bay',
				author: 'Jenna Laine',
				source: 'ESPN',
				openingParagraph:
					'Tampa Bay Buccaneers quarterback Tom Brady stared at the floor, his face flushed, while his teammates slowly filed out of the locker room following their 27-22 loss to the Baltimore Ravens in Week 8. Backup quarterbacks Blaine Gabbert and Ryan Griffin and quarterbacks coach Clyde Christensen tried to comfort him, but he was inconsolable.',
				articleLink:
					'https://www.espn.com/nfl/story/_/id/35427660/retirement-playoffs-tom-brady-22-23-bucs-season',
				backgroundImage:
					'https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0201%2Fr1125439_1296x729_16%2D9.jpg&w=1140&cquality=40&format=jpg',
			},
			{
				featured: false,
				title: 'What Tom Brady Has Said About Retirement After 2022 NFL Season',

				source: 'Sports Illustrated',
				openingParagraph:
					'With the Buccaneers’ 2022 campaign in the books, conversations regarding Tom Brady’s future will start to re-emerge as one of the hottest topics around the NFL',
				articleLink:
					'https://www.si.com/nfl/2023/01/17/tom-brady-potential-retirement-after-2022-nfl-season',
				backgroundImage:
					'https://pbs.twimg.com/media/FqkXumTXgBAaM0u?format=jpg&name=900x900',
			},
			{
				featured: false,
				title:
					'Is Tom Brady Retiring Because Gisele Went for a Jog? An Investigation',

				source: 'The Big Lead',
				openingParagraph:
					'Tom Brady and the Tampa Bay Buccaneers lost to the Dallas Cowboys in embarrassing fashion on Monday night. After the game it looked like Brady might be ready to move on from Tampa. Whether he plays next year for another team, retires and goes into broadcasting, or some thing thing, we probably wont know for a while.But what we do know for sure is that Gisele went for a jog recently.',
				articleLink:
					'https://www.thebiglead.com/posts/tom-brady-retiring-gisele-went-for-a-jog-investigation-01gq2jbetgfg',
				backgroundImage:
					'https://images2.minutemediacdn.com/image/upload/c_crop,w_3568,h_2007,x_0,y_221/c_fill,w_2160,ar_16:9,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2Fthebiglead_en_international_web%2F01gq2s3kf6jz7vw4etty.jpg',
			},
			{
				featured: false,
				title:
					'Tom Bradys future: GOAT has three options for 2023, one allowing him to choose new NFL team',

				source: 'USA Today',
				openingParagraph:
					'Monday night, the "GOAT" suffered one of the worst playoff losses of his 23 professional seasons in what might have been his final game with the Tampa Bay Buccaneers – if not his final game, period.',
				articleLink:
					'https://www.usatoday.com/story/sports/nfl/columnist/nate-davis/2023/01/17/tom-brady-2023-options-retire-seven-teams-jets-buccaneeers-patriots/11061373002/',
				backgroundImage:
					'https://www.gannett-cdn.com/presto/2023/01/17/USAT/284990ce-c42a-4647-bbfd-46130d49d29b-AP_Cowboys_Buccaneers_Football.jpg?crop=1893,1898,x224,y47&width=600&height=602&format=pjpg&auto=webp',
			},
		],
	},
	{
		category: 'Entertainment',
		question: 'Brittney Spears husband was in the right to leave her in public',
		upvotes: [],
		downvotes: [],
		discussions: [],
		relatedArticles: [
			{
				id: 1,
				featured: true,
				title:
					'SAM ASGHARI Explains Britney Episode ... DENIES BOLTING, MANIC BEHAVIOR',
				source: 'TMZ',
				openingParagraph:
					'Sam Asghari explained things to a pap Sunday, who asked him about what went down Friday night in Woodland Hills ... where we got video of Britney covering up her face, and talking gibberish, after somebody tried recording her while she was dining.',
				articleLink:
					'https://www.tmz.com/2023/01/16/sam-asghari-explains-britney-spears-manic-episode-denies-storming-out/',

				backgroundImage:
					'https://imagez.tmz.com/image/d7/4by3/2022/12/23/d7f7be7c8cbc4226a90dd6cdaaa450ed_md.jpg',
			},
			{
				id: 2,
				featured: false,
				title:
					'BRITNEY SPEARS	JUSTIN TIMBERLAKE ON HER MIND ...Sucky Tattoo On Her Arm!!!',
				source: 'TMZ',
				openingParagraph:
					'Britney Spears has clear regrets ... about a tattoo, and about her ex, Justin Timberlake -- she is even posting throwback pics of him -- which cannot feel great for her husband, Sam Asghari.',
				articleLink:
					'https://www.tmz.com/2023/01/18/britney-spears-call-out-justin-timberlake-tattoo-sam-asghari/',
				backgroundImage:
					'https://imagez.tmz.com/image/bd/4by3/2020/04/16/bd6ba1705d124d33954d5b3d952497f2_md.jpg',
			},
			{
				id: 3,
				featured: false,
				title:
					'Britney Spears teases new tattoo, reminisces about Justin Timberlake relationship',
				source: 'Page Six',
				openingParagraph:
					'The pop star took to Instagram Tuesday night to share a series of throwback photos playing basketball with ex-boyfriend Justin Timberlake.',
				articleLink:
					'https://pagesix.com/2023/01/17/britney-spears-teases-new-tattoo-posts-photos-with-ex-justin-timberlake/',
				backgroundImage:
					'https://pagesix.com/wp-content/uploads/sites/3/2023/01/britney-spears-reminisces-about-shooting-hoops-with-justin-timberlake691.jpg?quality=75&strip=all&w=1280',
			},
			{
				id: 4,
				featured: false,
				title:
					'Britney Spears Shares Epic Throwback Photos With Ex Justin Timberlake: "When Miracles Happened"',
				source: 'hollywoodlife',
				openingParagraph:
					'Britney Spears, 41, gave her fans a serious blast from the past with one of her latest Instagram posts! The singer shared two throwback photos, one of which can be seen below, of her and her ex-boyfriend Justin Timberlake playing basketball in 2001, when they were still dating',
				articleLink:
					'https://pagesix.com/2023/01/17/britney-spears-teases-new-tattoo-posts-photos-with-ex-justin-timberlake/',
				backgroundImage:
					'https://pagesix.com/wp-content/uploads/sites/3/2023/01/britney-spears-reminisces-about-shooting-hoops-with-justin-timberlake695.jpg?quality=75&strip=all&w=2000',
			},
		],
	},
	{
		category: 'Entertainment',
		question: 'The Last of Us will surpass the popularity of The Walking Dead',
		upvotes: [],
		downvotes: [],
		discussions: [],
		relatedArticles: [
			{
				id: 1,
				featured: true,
				title:
					'HBO’s New Post-Apocalyptic Drama Won’t Make The Walking Dead’s Biggest Mistake',
				source: 'SLATE',
				openingParagraph:
					'The Last of Us, HBO’s adaptation of Neil Druckmann’s lauded video game, is finally here after a long battle to bring the post-apocalyptic survival game to life. The show, which follows a gruff smuggler, Joel (Pedro Pascal), as he attempts to escort Ellie (Bella Ramsey), a brazen foul-mouthed 14-year-old girl seemingly immune to the fungus that has zombified the world, across the United States.',
				articleLink:
					'https://slate.com/culture/2023/01/last-of-us-hbo-walking-dead-review.html',
				backgroundImage:
					'https://compote.slate.com/images/21f59494-bf87-43d5-8096-a4a85ab9d28a.jpeg?crop=1716%2C1144%2Cx102%2Cy134&width=1280',
			},
			{
				id: 2,
				featured: false,
				title:
					'Bigger, scarier, unforgettable – The Last of Us game is perfect for TV',
				source: 'The Guardian',
				openingParagraph:
					'When it comes to video-game adaptations, TV and film producers have historically had an unfortunate habit of using the game as a kind of Mad Libs prompt for something completely unrelated.',
				articleLink:
					'https://www.theguardian.com/tv-and-radio/2023/jan/19/the-last-of-us-video-game-tv-adaptation-triumph',
				backgroundImage:
					'https://i.guim.co.uk/img/media/21060b8bd2972b5af8845af0b50d8be15d674e58/0_0_6000_3600/master/6000.jpg?width=1300&quality=45&dpr=2&s=none',
			},
			{
				id: 3,
				featured: false,
				title: 'The Last of Us Takes Its Source Material to Another Level',
				source: 'The Ringer',
				openingParagraph:
					'In The Last of Us, zombies are the least terrifying part of the zombie apocalypse. Yes, the HBO drama’s alternate America is riddled with “Infected”: former humans now hijacked by a mutated strain of the Cordyceps fungus, a real-life pathogen that (currently) affects insects.',
				articleLink:
					'https://www.theringer.com/tv/2023/1/16/23554171/the-last-us-us-review-hbo-pedro-pascal-bella-ramsey',
				backgroundImage:
					'https://imageio.forbes.com/specials-images/imageserve/64074c5c6e64877d6b81710e/bella/960x0.jpg?format=jpg&width=960',
			},
			{
				id: 4,
				featured: false,
				title: 'How to Watch The Last of Us',
				source: 'BAZAAR',
				openingParagraph:
					'Following its 2013 release, the critically acclaimed action-adventure PlayStation video game, The Last of Us, has been considered among the gaming worlds best. Now, HBO has adapted the games post-apocalyptic universe into a 9-episode series of the same name—and its taking on an exciting life of its own.',
				articleLink:
					'https://www.harpersbazaar.com/culture/film-tv/a42535384/the-last-of-us-episode-release-schedule-hbo-max/',
				backgroundImage:
					'https://i.guim.co.uk/img/media/66c96a36748037387c0bc58c3253834df14a7eb7/40_0_1200_720/master/1200.jpg?width=880&quality=45&dpr=2&s=none',
			},
		],
	},
];

export const DummyDiscussionData = [
	{
		topic: 'Tom Brady is washed up',
		category: 'Sports',
		author: '63f839003fcb69c17deb52c3',
		triggerQuestionID: '63f4e0d53fcb69c17deb527f',
		upvotes: [],
		downvotes: [],
		comments: [
			{
				userId: '3f839003fcb69c17deb52c8',
				comment:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet.',
				upvotes: [],
				downvotes: [],
			},
			{
				userId: '63f839003fcb69c17deb52c3',
				comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				upvotes: [],
				downvotes: [],
			},
			{
				userId: '3f839003fcb69c17deb52c8',
				comment:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
				upvotes: [],
				downvotes: [],
			},
		],
	},
	{
		topic: 'Tom Brady is the goat and will play till he is 50',
		category: 'Sports',
		author: '63f839003fcb69c17deb52c4',
		triggerQuestionID: '63f4e0d53fcb69c17deb527f',
		upvotes: [],
		downvotes: [],
		comments: [
			{
				userId: '63f839003fcb69c17deb52c4',
				comment:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet.',
				upvotes: [],
				downvotes: [],
			},
			{
				userId: '63f839003fcb69c17deb52c6',
				comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				upvotes: [],
				downvotes: [],
			},
			{
				userId: '63f839003fcb69c17deb52c4',
				comment:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
				upvotes: [],
				downvotes: [],
			},
		],
	},
	{
		topic: 'Leave Brittney Alone!',
		category: 'entertainment',
		author: '63f839003fcb69c17deb52c5',
		triggerQuestionID: '63f4e0d53fcb69c17deb5280',
		upvotes: [],
		downvotes: [],
		comments: [
			{
				userId: '63f839003fcb69c17deb52c4',
				comment:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet.',
				upvotes: [],
				downvotes: [],
			},
			{
				userId: '63f839003fcb69c17deb52c6',
				comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				upvotes: [],
				downvotes: [],
			},
			{
				userId: '63f839003fcb69c17deb52c4',
				comment:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
				upvotes: [],
				downvotes: [],
			},
		],
	},
	{
		topic: 'Brittney Spears is still alive?',
		category: 'entertainment',
		author: '63f839003fcb69c17deb52c6',
		triggerQuestionID: '63f4e0d53fcb69c17deb5280',
		upvotes: [],
		downvotes: [],
		comments: [
			{
				userId: '3f839003fcb69c17deb52c8',
				comment:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet.',
				upvotes: [],
				downvotes: [],
			},
			{
				userId: '63f839003fcb69c17deb52c3',
				comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				upvotes: [],
				downvotes: [],
			},
			{
				userId: '3f839003fcb69c17deb52c8',
				comment:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
				upvotes: [],
				downvotes: [],
			},
		],
	},
	{
		topic: 'They are fucking up this show',
		category: 'entertainment',
		author: '63f839003fcb69c17deb52c7',
		triggerQuestionID: '63f4e0d53fcb69c17deb5281',
		upvotes: [],
		downvotes: [],
		comments: [
			{
				userId: '3f839003fcb69c17deb52c8',
				comment:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet.',
				upvotes: [],
				downvotes: [],
			},
			{
				userId: '63f839003fcb69c17deb52c3',
				comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				upvotes: [],
				downvotes: [],
			},
			{
				userId: '3f839003fcb69c17deb52c8',
				comment:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
				upvotes: [],
				downvotes: [],
			},
		],
	},
	{
		topic: 'The last of us is going to be the best show ever!',
		category: 'entertainment',
		author: '63f839003fcb69c17deb52c8',
		triggerQuestionID: '63f4e0d53fcb69c17deb5281',
		upvotes: [],
		downvotes: [],
		comments: [
			{
				userId: '63f839003fcb69c17deb52c4',
				comment:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet.',
				upvotes: [],
				downvotes: [],
			},
			{
				userId: '63f839003fcb69c17deb52c6',
				comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				upvotes: [],
				downvotes: [],
			},
			{
				userId: '63f839003fcb69c17deb52c4',
				comment:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
				upvotes: [],
				downvotes: [],
			},
		],
	},
];

export const UserData = [
	{
		first_name: 'John ',
		last_name: 'Doe',
		email: 'jDoe@example.com',
	},
	{
		first_name: 'Jane ',
		last_name: 'Smith',
		email: 'jSmith@example.com',
	},
	{
		first_name: 'Alex',
		last_name: 'Joseph',
		email: 'alexjoseph@example.com',
	},
	{
		first_name: 'Johnny ',
		last_name: 'Appleseed',
		email: 'japseed@example.com',
	},
	{
		first_name: 'Olivia',
		last_name: 'Brown',
		email: 'olivia.brown@example.com',
	},
	{
		first_name: 'Emma ',
		last_name: 'Williams',
		email: 'em.will@example.com',
	},
];
