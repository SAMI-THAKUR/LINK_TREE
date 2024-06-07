import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookMessengerShareButton,
  PinterestShareButton,
} from "react-share";
import { Icon } from "@iconify-icon/react";

function ModalComponent(props) {
  const { shareUrl } = props;
  function copyToClipboard() {
    window.navigator.clipboard.writeText(shareUrl);
  }
  return (
    <main className="w-fit">
      <h1 className="flex justify-center font-staat text-3xl text-gray-300">Share this LinkTree</h1>
      <div className="flex flex-wrap align-middle p-10 gap-10 bg-darkbg justify-between w-[300px] mt-5">
        <WhatsappShareButton url={shareUrl}>
          <Icon icon="logos:whatsapp-icon" className="text-[38px]" />
        </WhatsappShareButton>
        <LinkedinShareButton url={shareUrl}>
          <Icon icon="skill-icons:linkedin" className="text-[38px]" />
        </LinkedinShareButton>
        <RedditShareButton url={shareUrl}>
          <Icon icon="logos:reddit-icon" className="text-[38px]" />
        </RedditShareButton>
        <EmailShareButton url={shareUrl}>
          <Icon icon="fluent-emoji-flat:e-mail" className="text-[38px]" />
        </EmailShareButton>
        <FacebookShareButton url={shareUrl}>
          <Icon icon="logos:facebook" className="text-[38px]" />
        </FacebookShareButton>
        <FacebookMessengerShareButton url={shareUrl}>
          <Icon icon="fe:messanger" className="text-[38px] text-blue-500" />
        </FacebookMessengerShareButton>
        <TwitterShareButton url={shareUrl}>
          <Icon icon="bi:twitter-x" className="text-[38px] text-gray-300" />
        </TwitterShareButton>
        <TelegramShareButton url={shareUrl}>
          <Icon icon="logos:telegram" className="text-[38px]" />
        </TelegramShareButton>
        <PinterestShareButton url={shareUrl}>
          <Icon icon="logos:pinterest" className="text-[38px]" />
        </PinterestShareButton>
      </div>
      <div class="w-full mx-auto flex gap-4 justify-center -mt-2">
        <label for="npm-install-copy-text" class="sr-only">
          Label
        </label>
        <input
          id="npm-install-copy-text"
          type="text"
          class="overflow-x-visible bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 px-2 py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={shareUrl}
          disabled
          readonly
        />
        <button
          onClick={copyToClipboard}
          class=" text-darkbg bg-background hover:bg-gray-200  font-medium rounded-lg text-sm w-full sm:w-auto py-2 px-2 text-center items-center inline-flex justify-center"
        >
          <span id="default-message" class="inline-flex items-center gap-2">
            <Icon icon="solar:clipboard-bold" className="my-auto" />
            <span class="font-mono text-sm">Copy</span>
          </span>
        </button>
      </div>
    </main>
  );
}

export default ModalComponent;
