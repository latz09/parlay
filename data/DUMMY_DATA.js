const ObjectId = require('mongo-objectid');

export const DummyTriggerQuestions = [
	{
		category: 'Sports',
		question: 'Should Tom Brady have stayed retired?',
		upvotes: 0,
		downvotes: 0,
		discussions: [],
		relatedArticles: [
			{
				id: 1,
				featured: true,
				title:
					'A comprehensive timeline of Tom Bradys tumultuous season in Tampa Bay',
				author: 'Jenna Laine',
				source: 'ESPN',
				openingParagraph:
					'Tampa Bay Buccaneers quarterback Tom Brady stared at the floor, his face flushed, while his teammates slowly filed out of the locker room following their 27-22 loss to the Baltimore Ravens in Week 8. Backup quarterbacks Blaine Gabbert and Ryan Griffin and quarterbacks coach Clyde Christensen tried to comfort him, but he was inconsolable.',
				articleLink:
					'https://www.espn.com/nfl/story/_/id/35427660/retirement-playoffs-tom-brady-22-23-bucs-season',
			},
			{
				id: 2,
				featured: false,
				title: 'What Tom Brady Has Said About Retirement After 2022 NFL Season',

				source: 'Sports Illustrated',
				openingParagraph:
					'With the Buccaneers’ 2022 campaign in the books, conversations regarding Tom Brady’s future will start to re-emerge as one of the hottest topics around the NFL',
				articleLink:
					'https://www.si.com/nfl/2023/01/17/tom-brady-potential-retirement-after-2022-nfl-season',
			},
			{
				id: 3,
				featured: false,
				title:
					'Is Tom Brady Retiring Because Gisele Went for a Jog? An Investigation',

				source: 'The Big Lead',
				openingParagraph:
					'Tom Brady and the Tampa Bay Buccaneers lost to the Dallas Cowboys in embarrassing fashion on Monday night. After the game it looked like Brady might be ready to move on from Tampa. Whether he plays next year for another team, retires and goes into broadcasting, or some thing thing, we probably wont know for a while.But what we do know for sure is that Gisele went for a jog recently.',
				articleLink:
					'https://www.thebiglead.com/posts/tom-brady-retiring-gisele-went-for-a-jog-investigation-01gq2jbetgfg',
			},
			{
				id: 4,
				featured: false,
				title:
					'Tom Bradys future: GOAT has three options for 2023, one allowing him to choose new NFL team',

				source: 'USA Today',
				openingParagraph:
					'Monday night, the "GOAT" suffered one of the worst playoff losses of his 23 professional seasons in what might have been his final game with the Tampa Bay Buccaneers – if not his final game, period.',
				articleLink:
					'https://www.usatoday.com/story/sports/nfl/columnist/nate-davis/2023/01/17/tom-brady-2023-options-retire-seven-teams-jets-buccaneeers-patriots/11061373002/',
			},
			{
				id: 5,
				featured: false,
				title: 'TOM BRADY RETIREMENT COMING AFTER PLAYOFF L???...QB Wont Say',

				source: 'USA Today',
				openingParagraph:
					'Monday night, the "GOAT" suffered one of the worst playoff losses of his 23 professional seasons in what might have been his final game with the Tampa Bay Buccaneers – if not his final game, period.',
				articleLink:
					'https://www.usatoday.com/story/sports/nfl/columnist/nate-davis/2023/01/17/tom-brady-2023-options-retire-seven-teams-jets-buccaneeers-patriots/11061373002/',
			},
		],
	},
	{
		category: 'Entertainment',
		question: 'Brittney Spears husband should have stormed off',
		upvotes: 0,
		downvotes: 0,
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
			},
		],
	},
	{
		category: 'Entertainment',
		question: 'The Last of Us will surpass the popularity of The Walking Dead',
		upvotes: 0,
		downvotes: 0,
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
			},
			{
				id: 3,
				featured: false,
				title: '‘The Last of Us’ Takes Its Source Material to Another Level',
				source: 'The Ringer',
				openingParagraph:
					'In The Last of Us, zombies are the least terrifying part of the zombie apocalypse. Yes, the HBO drama’s alternate America is riddled with “Infected”: former humans now hijacked by a mutated strain of the Cordyceps fungus, a real-life pathogen that (currently) affects insects.',
				articleLink:
					'https://www.theringer.com/tv/2023/1/16/23554171/the-last-us-us-review-hbo-pedro-pascal-bella-ramsey',
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
			},
		],
	},
];

export const DummyDiscussionData = [
	{
		topic: 'Tom Brady is washed up',
		category: 'Sports',
		triggerQuestionID: '63f4e0d53fcb69c17deb527f',
		upvotes: 0,
		downvotes: 0,
		comments: [
			{
				userId: '1',
				comment:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet.',
				upvotes: 0,
				downvotes: 0,
			},
			{
				userId: '2',
				comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				upvotes: 0,
				downvotes: 0,
			},
			{
				userId: '3',
				comment:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
				upvotes: 0,
				downvotes: 0,
			},
		],
	},	
	{
		topic: 'Leave Brittney Alone!',
		category: 'entertainment',
		triggerQuestionID:'63f4e0d53fcb69c17deb5280',
		upvotes: 0,
		downvotes: 0,
		comments: [
			{
				userId: '1',
				comment:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet.',
				upvotes: 0,
				downvotes: 0,
			},
			{
				userId: '2',
				comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				upvotes: 0,
				downvotes: 0,
			},
			{
				userId: '3',
				comment:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
				upvotes: 0,
				downvotes: 0,
			},
		],
	},
	{
		topic: 'They are fucking up this show',
		category: 'entertainment',
		triggerQuestionID: '63f4e0d53fcb69c17deb5281',
		upvotes: 0,
		downvotes: 0,
		comments: [
			{
				userId: '1',
				comment:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet.',
				upvotes: 0,
				downvotes: 0,
			},
			{
				userId: '2',
				comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				upvotes: 0,
				downvotes: 0,
			},
			{
				userId: '3',
				comment:
					'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
				upvotes: 0,
				downvotes: 0,
			},
		],
	},
];
