import GooglePlayLogo from "../assets/logos/google_play.svg";
import AppleLogo from "../assets/logos/app_store.svg";

import StoreLink from "../commen/StoreLink";

function StoreLinks() {
  return (
    <div className="mt-10 hidden  justify-center space-x-2 sm:flex md:justify-normal">
          <StoreLink
            href="https://www.apple.com/app-store"
            UpperText="Download on the"
            LowerText="App Store"
            logo={AppleLogo}
            target="_blank"
            className="flex gap-3 rounded-lg bg-zinc-800 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-700"
          />

          <StoreLink
            href="https://play.google.com"
            UpperText="Get it on"
            LowerText="Google Play"
            logo={GooglePlayLogo}
            target="_blank"
            className="flex gap-3 rounded-lg bg-zinc-800 px-4 py-3 text-white hover:bg-zinc-950 active:bg-zinc-700"
          />
        </div>
  )
}

export default StoreLinks