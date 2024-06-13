import { Link, type DocumentHead } from "@builder.io/qwik-city";
import {HiArrowRightOutline} from '@qwikest/icons/heroicons'
// import styles from './home.module.css'
import { LRDQwikLogo } from "~/assets/LRDQwikLogo";
import HeroImg from '~/assets/img/heroImg.png?jsx'
import HeroImgMobileImg from '~/assets/img/heroMobileImg.png?jsx'
import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./style.css?inline";


export default component$(() => {
  useStylesScoped$(styles);

  return (
    <main class='flex min-h-screen flex-col p-6' >
      <div class='flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52' >
        <LRDQwikLogo/>
      </div>

      <div class='mt-4 flex grow flex-col gap-4 md: flex-row' >
        <div class='flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20' >
        {/* <div class="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-blue-500 border-l-transparent border-r-transparent" /> */}
        <div />
          <p class='text-xl text-gray-800 md:text-3xl md:leading-normal' >
            <strong>
              Welcome to LRDQWik.
            </strong>
            This is the example for the {""}
            <Link
              href="https://www.learn-qwik.com/learn/"
              target="_blank"
              class='text-blue-500'
            >
              Qwik Learn Course
            </Link>
            , brought to you by {''}
            <Link
              href="https://www.lareponsedev.com/"
              target="_blank"
              class='text-blue-500'
            >
              LaReonseDev
            </Link> {''}
            .
          </p>
          <Link
            href="/login"
            class="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>
              Log in
            </span>
            <HiArrowRightOutline/>

          </Link>
        </div>
        <div class='flex items-center justify-center p-6 md:2-3/5 md:px-28 md:py-12' >
          <HeroImg class="hidden md:block" />
          <HeroImgMobileImg class="blcok md:block" />
        </div>
      </div>

      <div class="flex items-center gap-3">
      <label class="switch">
        <input
          type="checkbox"
          id="hide-checkbox"
          onClick$={() => {
            const theme = document.documentElement.className;
            if (theme === "light") {
              document.documentElement.className = "dark";
              localStorage.setItem("theme", "dark");
            } else {
              document.documentElement.className = "light";
              localStorage.setItem("theme", "light");
            }
          }}
        />
        <span class="slider round"></span>
      </label>
    </div>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
