import { Transition } from "@headlessui/react";
import { XCircleIcon } from "@heroicons/react/20/solid";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

export default function Notification({
  title,
  message,
  show,
  setShow,
}: {
  title: string;
  message: string;
  show: boolean;
  setShow: (show: boolean) => void;
}) {
  return (
    <>
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 my-14 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-[#1a0b30] shadow-lg ring-1 ring-white ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <InformationCircleIcon
                      className="h-6 w-6 text-red-300"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-md font-medium text-gray-300">{title}</p>
                    <p className="mt-1 text-sm text-gray-100">{message}</p>
                    <p className="mt-1 text-sm font-bold">
                      <a
                        href="https://github.com/t0m3k/jira-redirect/issues"
                        className="text-red-300 underline hover:text-red-500"
                        target="_blank"
                      >
                        Report an issue
                      </a>
                    </p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md text-red-300 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        setShow(false);
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XCircleIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
