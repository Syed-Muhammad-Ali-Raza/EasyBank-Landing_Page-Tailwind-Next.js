export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  ">
      <div className="header flex justify-between pl-[7rem] pr-[7rem] h-[6rem] bg-white">
        <div className="logo justify-center items-center flex">
          <img src="https://tailwindpractice-easybank.netlify.app/images/logo.svg" />
        </div>
        <div className="Pages flex justify-center items-center gap-[14px] ">
        <ul className="flex gap-4 lg:gap-8 text-gray-500 h-full items-center">
            <li className="link"><a href="#">Home</a></li>
            <li className="link"><a href="#">About</a></li>
            <li className="link"><a href="#">Contact</a></li>
            <li className="link"><a href="#">Blog</a></li>
            <li className="link"><a href="#">Careers</a></li>
        </ul>
        </div>
        <div className=" flex justify-center items-center ">
          <button className="button">Request Invite</button>
        </div>
      </div>

      <div className="hero-section">
        <div className="grid grid-cols-1 bg-primary-light pl-0 md:pl-10 xl:pl-28 md:grid-cols-2">
          <div className="my-auto px-10 md:px-0 py-14 md:py-0 order-2 md:order-none text-center md:text-left">
            <h1 className="text-5xl lg:text-7xl pb-9">
              Next generation digital banking
            </h1>
            <p className="text-xl text-gray-500 pb-9">
              Take your financial life online. Your Easybank account will be a
              one-stop-shop for spending, saving, budgeting, investing, and much
              more.
            </p>
            <button className="button">Request invite</button>
          </div>
          <div className="col-md-6">
            <img src="https://tailwindpractice-easybank.netlify.app/images/image-mockups.png" />
          </div>
         
        </div>
        
      </div>

      <div className="bg-primary-dark p-10 xl:p-28">
        <div className="pb-10 lg:pb-20 md:w-1/2 text-center md:text-left">
       <h1 className="text-4xl pb-6">Why Choose Easy Bank</h1>

          <p className="text-gray-500">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5">
        <div className="flex flex-col items-center md:items-start lg:py-0">
          {/* <img src"https://tailwindpractice-easybank.netlify.app/images/icon-online.svg"/> */}
          <img src="https://tailwindpractice-easybank.netlify.app/images/icon-online.svg" />
          <h3 className="text-2xl py-6">Online Banking</h3>
          <p className="text-gray-500 text-center md:text-left">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start lg:py-0">
          <img src="https://tailwindpractice-easybank.netlify.app/images/icon-budgeting.svg" />
          <h3 className="text-2xl py-6"> Simple Budgeting</h3>
          <p className="text-gray-500 text-center md:text-left">
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start lg:py-0">
          <img src="https://tailwindpractice-easybank.netlify.app/images/icon-onboarding.svg" />
          <h3 className="text-2xl py-6"> Fast Onboarding</h3>
          <p className="text-gray-500 text-center md:text-left">
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start lg:py-0">
          <img
            src=" https://tailwindpractice-easybank.netlify.app/images/icon-api.svg
"
          />
          <h3 className="text-2xl py-6"> Open API</h3>
          <p className="text-gray-500 text-center md:text-left">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    
      </div>



      <div className="artice bg-primary-light p-10 xl:p-28" >
        <h2 className="text-4xl pb-8 text-center md:text-left">
        Latest Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
         <div className="bg-white rounded-lg pb-10 md:pb-0 hover:shadow-lg transition duration-300">
          <img src="https://tailwindpractice-easybank.netlify.app/images/image-currency.jpg"/>
          <div class="p-4">
                        <p className="text-gray-500 text-xs pb-3">By Claire Robinson</p>
                        <h3 className="text-md font-semibold pb-3 hover:text-lime-green transition duration-300 ease-in-out cursor-pointer">Receive money in any currency with no fees</h3>
                        <p className="text-sm text-gray-500">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                    </div> 
         </div>
         <div className="bg-white rounded-lg pb-10 md:pb-0 hover:shadow-lg transition duration-300">
                    <img src="https://tailwindpractice-easybank.netlify.app/images/image-restaurant.jpg" alt="restaurant" class="rounded-t-lg h-56 md:h-48 w-full object-cover"/>
                    <div className="p-4">
                        <p className="text-gray-500 text-xs pb-3">By Wilson Hutton</p>
                        <h3 className="text-md font-semibold pb-3 hover:text-lime-green transition duration-300 ease-in-out cursor-pointer">Treat yourself without worrying about money</h3>
                        <p className="text-sm text-gray-500">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                    </div> 
                </div>
                <div className="bg-white rounded-lg pb-10 md:pb-0 hover:shadow-lg transition duration-300">
                    <img src="https://tailwindpractice-easybank.netlify.app/images/image-plane.jpg" alt="plane" class="rounded-t-lg h-56 md:h-48 w-full object-cover"/>
                    <div className="p-4">
                        <p className="text-gray-500 text-xs pb-3">By Wilson Hutton</p>
                        <h3 className="text-md font-semibold pb-3 hover:text-lime-green transition duration-300 ease-in-out cursor-pointer">Take your Easybank card wherever you go</h3>
                        <p className="text-sm text-gray-500">We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                    </div> 
                </div>
                <div className="bg-white rounded-lg pb-10 md:pb-0 hover:shadow-lg transition duration-300">
                    <img src="https://tailwindpractice-easybank.netlify.app/images/image-confetti.jpg" alt="confetti" class="rounded-t-lg h-56 md:h-48 w-full object-cover"/>
                    <div className="p-4">
                        <p className="text-gray-500 text-xs pb-3">By Claire Robinson</p>
                        <h3 className="text-md font-semibold pb-3 hover:text-lime-green transition duration-300 ease-in-out cursor-pointer">Our invite-only Beta accounts are now live!</h3>
                        <p className="text-sm text-gray-500">After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                    </div> 
                </div>
        </div>

        </div>



        <div className="footer">
        <footer class="bg-[#2d314d] text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-10 xl:px-28 py-7 justify-items-center lg:justify-items-start">
            <div>
            <img src="https://tailwindpractice-easybank.netlify.app/images/logo-white.svg" alt="logo" class="object-contain mb-12"/>
                <ul class="flex gap-3">
                    <li><a href="#"><img src="https://tailwindpractice-easybank.netlify.app/images/icon-facebook.svg" alt="facebook"/></a></li>
                    <li><a href="#"><img src="https://tailwindpractice-easybank.netlify.app/images/icon-youtube.svg" alt="youtube"/></a></li>
                    <li><a href="#"><img src="https://tailwindpractice-easybank.netlify.app/images/icon-twitter.svg" alt="twitter"/></a></li>
                    <li><a href="#"><img src="https://tailwindpractice-easybank.netlify.app/images/icon-pinterest.svg" alt="pinterest"/></a></li>
                    <li><a href="#"><img src="https://tailwindpractice-easybank.netlify.app/images/icon-instagram.svg" alt="instagram"/></a></li>
                    
                </ul>
            </div>
            <div class="flex flex-col md:flex-row gap-2 md:gap-24 lg:col-span-2 my-10 md:my-0"> 
                <ul class="flex flex-col gap-2 text-center md:text-left">
                    <li class="hover:text-lime-green transition duration-300"><a href="#">About Us</a></li>
                    <li class="hover:text-lime-green transition duration-300"><a href="#">Contact</a></li>
                    <li class="hover:text-lime-green transition duration-300"><a href="#">Blog</a></li> 
                </ul>
                <ul class="flex flex-col gap-2 text-center md:text-left">
                    <li class="hover:text-lime-green transition duration-300"><a href="#">Careers</a></li>
                    <li class="hover:text-lime-green transition duration-300"><a href="#">Support</a></li>
                    <li class="hover:text-lime-green transition duration-300"><a href="#">Privacy Policy</a></li>
                </ul>
            </div>
            <div class="flex flex-col items-center md:col-span-2 lg:col-auto lg:items-end gap-5 md:mt-10">
                <button class="button" aria-label="Request Invite">Request Invite</button>
                <p class="text-gray-500"> © Easybank. All Rights Reserved</p>
            </div>
        </footer>
        </div>




 
    </main>
  );
}
