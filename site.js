/* site.js — every piece of text on the portfolio lives here. */
window.SITE={
  key:'rohan-portfolio',
  name:'Rohan D Stanly',
  short:'Rohan',
  initials:'RS',
  role:'Android & Flutter Engineer',
  location:'Kerala, India',
  tag:'Flutter engine active',
  badge:'Available for freelance projects',
  heroTools:['Kotlin','Flutter','Firebase','Razorpay'],
  nowPlaying:{track:'Morning Worship',app:'Gloryfy Music',status:'Downloaded · plays offline'},
  intro:'<b>Mobile apps that keep playing when the signal drops.</b> I’m Rohan, an Android and Flutter engineer in Kerala. Three years of production <b>Kotlin</b> at MACOM, and four apps of my own live on <b>Google Play</b> and the <b>App Store</b>.',
  metrics:[[3,'Years in production Android'],[4,'Apps live on the stores'],[5000,'Registered Gloryfy users','+'],[99.8,'Crash-free sessions','%']],
  contact:{
    github:'https://github.com/rohandanielstanly',
    linkedin:'https://www.linkedin.com/in/Rohan-D-Stanly',
    email:'rohandstanly2000@gmail.com',
    whatsapp:'919061204568',
    phone:'+919061204568',
    phoneText:'+91 90612 04568',
    play:'https://play.google.com/store/search?q=Gloryfy&c=apps',
    appstore:''
  },
  about:[
    'I’m Rohan D Stanly, an Android and Flutter engineer from Kerala. I spent three years at MACOM in Thrissur building production Kotlin and Jetpack Compose apps, including EMI and loan calculation flows.',
    'Since November 2025 I’ve been building and running the Gloryfy apps on my own: design, Flutter code, the PHP and MySQL backend, payments and store releases.'
  ],
  availability:'Based in Kerala, India. Open to full-time, contract, freelance and remote roles.',
  services:[
    ['Android apps','Kotlin, Java and Jetpack Compose with MVVM and Clean Architecture.','android'],
    ['Flutter apps','One codebase for Android and iOS, published on both stores.','phone'],
    ['Backends and APIs','REST APIs with PHP, MySQL and Firebase, including sign-in.','cloud'],
    ['Payments and push','Razorpay subscriptions and OneSignal notifications.','card'],
    ['Media and offline','Playback, queues and downloads that work on weak connections.','headphones'],
    ['Fixes and releases','Debugging, performance tuning, R8/ProGuard and store releases.','rocket']
  ],
  workTitle:'Live apps, built and shipped solo',
  workIntro:'Flutter and Dart on Android and iOS, with a PHP and MySQL backend I wrote and run myself.',
  projects:[
    {id:'gloryfy-music',title:'Gloryfy Music',category:'Flutter',stat:'250+ downloads',
     summary:'Worship streaming with playlists, favourites, listening history, offline downloads and Razorpay premium subscriptions.',
     description:'Worship streaming with playlists, favourites, listening history, offline downloads and Razorpay premium subscriptions. Built in Flutter and Dart for Android and iOS, with a PHP and MySQL backend I wrote and run myself.',
     role:'Solo: design, Flutter code, PHP and MySQL backend, payments and store releases.',year:'2025',
     features:['Worship streaming with playlists','Favourites and listening history','Offline downloads that play without signal','Razorpay premium subscriptions'],featured:true,tools:['Flutter','Firebase','Razorpay','PHP / MySQL'],liveUrl:'https://play.google.com/store/search?q=Gloryfy%20Music&c=apps',storeUrl:''},
    {id:'gloryfy-creators',title:'Gloryfy Creators',category:'Flutter',stat:'40+ creators onboarded',
     summary:'Artist distribution on a 60/40 revenue share. Creators upload music and track analytics, earnings and payout history.',
     description:'Artist distribution on a 60/40 revenue share. Creators upload music and track analytics, earnings and payout history. Built in Flutter and Dart for Android and iOS, with a PHP and MySQL backend I wrote and run myself.',
     role:'Solo: design, Flutter code, REST API and MySQL backend, and store releases.',year:'2025',
     features:['Artist distribution on a 60/40 revenue share','Creators upload their own music','Analytics and earnings tracking','Payout history'],tools:['Flutter','REST API','MySQL'],liveUrl:'https://play.google.com/store/search?q=Gloryfy%20Creators&c=apps',storeUrl:''},
    {id:'gloryfy-podcasts',title:'Gloryfy Podcasts',category:'Flutter',stat:'Devotional podcast platform',
     summary:'Discover, play and publish podcast episodes, with favourites, accounts and comments.',
     description:'Discover, play and publish podcast episodes, with favourites, accounts and comments. Built in Flutter and Dart for Android and iOS, with a PHP and MySQL backend I wrote and run myself.',
     role:'Solo: design, Flutter code, REST API and MySQL backend, and store releases.',year:'2025',
     features:['Discover and play podcast episodes','Publish your own episodes','Favourites and accounts','Comments on episodes'],tools:['Flutter','REST API','MySQL'],liveUrl:'https://play.google.com/store/search?q=Gloryfy%20Podcasts&c=apps',storeUrl:''},
    {id:'vachanam-music',title:'Vachanam Music',category:'Android',stat:'900+ downloads · Android',
     summary:'Migrated a legacy Java codebase to Kotlin across 25+ classes, then kept shipping features and push notifications.',
     description:'Migrated a legacy Java codebase to Kotlin across 25+ classes, then kept shipping features and push notifications.',
     role:'Android developer: Kotlin migration, new features and push notifications.',year:'',
     features:['Legacy Java codebase migrated to Kotlin, 25+ classes','New features shipped after the migration','Push notifications with OneSignal'],tools:['Kotlin','Firebase','OneSignal'],liveUrl:'https://play.google.com/store/search?q=Vachanam%20Music&c=apps',storeUrl:''}
  ],
  casestudy:{
    title:'Offline music download and playback',
    sub:'One feature in Gloryfy Music, built end to end.',
    owned:'The whole feature in Flutter: downloads, local caching, playback queue management and the REST API behind it. I also own the PHP and MySQL backend. Firebase and Razorpay handle auth and payments.',
    improve:'Background download resume with retries, a cache eviction policy to manage storage, and automated tests around download and queue logic. I’d also move to a cleaner layered architecture so playback and caching are easier to test and extend.',
    states:[
      {k:'Strong signal',t:'Streaming',d:'Tracks stream live while the queue pre-fetches the next songs.'},
      {k:'Weak signal',t:'Cached playback',d:'Cached tracks and the pre-fetched queue keep the music going while the connection is poor.'},
      {k:'No signal',t:'Offline',d:'Downloaded tracks play from local storage, so the music keeps playing with no connection.'}
    ]
  },
  expIntro:'Two roles, one thread: shipping mobile software people use.',
  experience:[
    {date:'Nov 2025 – Present',title:'Mobile Software Engineer',org:'Gloryfy ecosystem',points:[
      'Designed and shipped four Flutter apps for Android and iOS, from architecture to store release.',
      'Built the PHP, MySQL and Firebase backend for authentication, content delivery and payments for 5,000+ users.',
      'Own the full lifecycle alone: UI, APIs, testing, deployment and post-launch support.'],note:''},
    {date:'Oct 2022 – Nov 2025',title:'Android Developer',org:'MACOM',points:[
      'Built Kotlin, Java and Jetpack Compose apps with MVVM and Clean Architecture for 1,000+ active users across 21 modules.',
      'Built EMI and loan calculation flows and cut reported calculation defects by 71%.',
      'Integrated REST APIs with Retrofit and Coroutines across 110+ screens.',
      'Built reusable Compose components that cut new-screen time by 60%.',
      'Profiled and tuned performance, reducing crash rate by 35% and holding 99.8%+ crash-free sessions across 15 releases.'],
     note:'MACOM’s apps are proprietary, so there are no public links for that work.'}
  ],
  education:[{date:'2018 – 2022',title:'B.Tech in Computer Science and Engineering',org:'APJ Abdul Kalam Technological University'}],
  skills:{
    Android:'Kotlin, Java, Jetpack Compose, XML, MVVM, Clean Architecture, Coroutines, Flow',
    Flutter:'Dart, Provider, BLoC, offline caching, Android and iOS deployment',
    Backend:'REST, Retrofit, PHP, MySQL, Firebase Auth, Firestore, Cloud Functions',
    Tools:'Android Studio, Git, Gradle, CI/CD, R8/ProGuard, Figma, Razorpay, OneSignal'
  },
  marquee:['Kotlin','Jetpack Compose','Flutter','Dart','Firebase','Razorpay','Retrofit','Coroutines','PHP','MySQL','Clean Architecture'],
  game:{title:'Squash the bugs',text:'Twenty seconds. Tap every bug before it hides. A rocket is worth three points, an ANR bug is worth two, and the green checks are passing tests, so leave them alone.'},
  hireTitle:'Hire me for your project',
  hireIntro:'Have an app idea, or an app that needs fixing? Send a short brief and I’ll reply with questions or next steps.',
  process:[
    ['Send your brief','Tell me what you want to build and by when.'],
    ['Agree the scope','We settle features, timeline and price before any work starts.'],
    ['I build and ship','Design, code, testing and store release, with updates along the way.']
  ],
  take:['Android apps','Flutter apps','Backends and APIs','Payments','App fixes and upgrades'],
  faqTitle:'Questions people ask',
  faqIntro:'The short answers, before you get in touch.',
  faq:[
    ['What work are you open to?','Full-time, contract, freelance and remote roles in Android, mobile engineering and Flutter.'],
    ['Can you build for both Android and iOS?','Yes. I build in Flutter, so one codebase runs on Android and iOS, and I have published apps on both stores. For Android-only work I use Kotlin and Jetpack Compose.'],
    ['Can I see your code or past work?','My apps are live on Google Play and the App Store, and my GitHub profile is linked below. MACOM’s apps are proprietary, so there are no public links for that work.'],
    ['How do I reach you?','Send a brief with the form above, or message me on WhatsApp (+91 90612 04568) or by email at rohandstanly2000@gmail.com.']
  ],
  contactTitle:'Let’s build something that plays on.',
  contactIntro:'Open to full-time, contract, freelance and remote roles in Android, mobile engineering and Flutter.'
};
