<script>
    import Step from "./Step.svelte"

    let steps = [
        {name: 'Webpage', icon: "fa-solid fa-globe" ,href:'https://evilimas.github.io/Homepage/'},
        {name: 'Travel List', icon: "fa-solid fa-suitcase" ,href:'https://traveling-list.netlify.app/'},
        {name: 'Live Chat app', icon: "fa-solid fa-comment" ,href:'https://app-live-chat.netlify.app/'},
        // {name: 'Shopping cart app', icon: "fa-solid fa-cart-shopping" ,href:'https://pirkiniu-krepselis.netlify.app/'},
        {name: 'Movie Watchlist', icon: "fa-solid fa-film" ,href:'https://movie-watchslist.netlify.app/'},
        {name: 'FoodieHub', icon: "fa-solid fa-utensils" ,href:'https://foodiehub2.netlify.app/'},
        {name: 'Tenzie', icon: "fa-solid fa-dice" ,href:'https://tenzies-gameproj.netlify.app/'},
    ]

    let benefits = [
        {name: 'A self taught developer', description: 'I started with a short beginners bootcamp and then i taught myself to code using free and paid online resources and absolutely fell in love with the creativity and problem solving that is involved in developing and engineering innovative new online experiences. Starting of with JavaScript, HTML & CSS and evolving my knowledge base to include JavaScript frameworks and much much more.'},

        {name: 'An excellent communicator and a team player', description: "Communication is key and it's a paramount value of mine. I believe in transparency and constructive communication above all else. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team."},

        {name: 'Passionate, hardworking and adaptable', description: " I consider myself passionate, hardworking, and highly motivated. I think i have a good attention to detail. I'm patient and flexible, always ready to adapt to new challenges. I never shy away from difficulties. I have an insatiable thirst for learning and continually improving my knowledge and skills."},
    ]
</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-col-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-violet-400">Egidijus</span> Vilimas<br> Front-End 
                <span class="poppins text-violet-400">Developer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="text-violet-400">favorite tech</span> includes: JavaScript, Vue, React, Sass, Tailwind & Firebase
            </p>
            <a href="https://www.linkedin.com/in/front-end-developer-egidijus-vilimas/" 
            target="_blank" 
            class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer" >
                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200">
                </div>
                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img src={"images/profile5.png"} alt="Profile image" class="object-cover z-[2] max-h-[70vh] "/>
        </div>
    </section>



    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">
                A few of my creative endeavors.
            </h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                Curiouse to <span class="poppins text-violet-400">see</span> my work?
            </h3>
            
        </div>
        <!-- <a href="#" target="_blank" class="mx-auto px-4 py-2 rounded-md border border-solid border-white flex items-center gap-2 -mb-4 sm:-mb-0 -mt-10 hover:border-violet-700 duration-200">
            <i class="fa-regular fa-circle-play"></i>
            <p>Watch the video</p>
        </a> -->
        <div class="grid grid-col-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p>Cheshire County Hygiene Services project is created with <strong class="text-violet-400">HTML, SCSS-SASS, JavaScript, Swiper.js </strong> a fictional company that offers a range of hygiene solutions. It showcases various features, including a explaination of services, customer reviews, pricing options, and a contact forms.</p>

            </Step>
            <Step step={steps[1]}>
                <p>Travel Packing List is created with <strong class="text-violet-400">REACT</strong> The Far Away Packing List App helps you organize your packing list for your upcoming trips. Whether you're planning a vacation or a business trip, this app keeps track of the items you need to pack.</p>

            </Step>
            <Step step={steps[2]}>
                <p>The project is created with <strong class="text-violet-400">Vue and Firestore </strong>This project is a simple real-time chat application. It enables users to communicate in real-time with each other, while also providing authentication and data storage functionalities through Firebase services.</p>

            </Step>
            <Step step={steps[3]}>
                <p>Movie Watchlist Project is created with <strong class="text-violet-400">HTML, CSS, JavaScript </strong> simple web application that allows users to search for movies using the(OMDb) API. The user can add movies to their watchlist, and is stored locally.</p>

            </Step>
            <Step step={steps[4]}>
                <p>FoodieHub service site is created with <strong class="text-violet-400">HTML, CSS, JavaScript </strong> a fictional AI-powered food subscription service. This website is designed to showcase the concept of a smart food subscription tailored to individual tastes and nutritional needs.</p>

            </Step>
            <Step step={steps[5]}>
                <p>Tenzies Game Project is created with <strong class="text-violet-400">REACT</strong> simple dice game where the goal is to roll until all dice show the same value. You can freeze individual dice between rolls to strategize and achieve the desired outcome. </p>

            </Step>
        </div>
    </section>
    <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700  after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4"
        >
            <h6 class="text-lg sm:stext-xl md:text-2xl">Want to know more?</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">
                A bit <span class="poppins text-violet-400">about</span> me.
            </h3>
        </div>
        <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl">I am . . .</p>
        <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">
            {#each benefits as benefit, index}
            <div class="flex gap-6 sm:gap-8">
                <p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">
                    0{index+1}
                </p>
                <div class="flex flex-col gap-6 sm:gap-8">
                    <h3 class="text-2xl sm:text-3xl md:text-5xl">
                        {benefit.name}
                    </h3>
                    <p>{benefit.description}</p>
                </div>
            </div>
            {/each}
        </div>
        <h5 class="text-2xl sm:text-3xl font-semibold text-center poppins">The <span class="text-violet-400 poppins">Complete</span> Package</h5>
        <div class="flex flex-col overflow-x-scrool gap-10 max-w-[800px] mx-auto w-full">
            <table class="bg-white text-slate-700 rounded text-center">
                <thead class="border-b border-solid border-slate-200">
                    <tr class="">
                        <th/>
                        <th class="whitespace-nowrap p-2 px-4">Candidate #1</th>
                        <th class="whitespace-nowrap p-2 px-4">Candidate #2</th>
                        <th class="whitespace-nowrap p-2 px-4">Candidate #3</th>
                        <th class="whitespace-nowrap bg-violet-700 text-white  p-4 px-8">Me</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border-b border-solid border-slate-200">
                        <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap">Dedication</td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                    <tr class="border-b border-solid border-slate-200">
                        <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap">Critical Thought</td>
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                    <tr class="border-b border-solid border-slate-200">
                        <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap">Interpersonal Skills</td>
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                    <tr class="border-b border-solid border-slate-200">
                        <td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm whitespace-nowrap">Programing Ability</td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-slate-500"></i></td>
                        <td><i class="fa-solid fa-xmark text-slate-500"></i></td>
                        <td><i class="fa-solid fa-check text-green-500"></i></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="mx-auto -mt-12 italic sm:hidden opacity-50">
            <p>Scrool to see more &rarr;</p>
        </div>
        <p class="mx-auto">So why not invest?</p>

    </section>
</main>