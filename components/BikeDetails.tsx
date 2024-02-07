"use client";

import { BikeDetailsProps } from "@/types";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment } from "react";

function BikeDetails({ isOpen, closeModel, bike }: BikeDetailsProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" onClose={closeModel} className="relative z-10">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto
                 transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5"
                >
                  <button
                    type="button"
                    onClick={closeModel}
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-white rounded-full"
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    {/* Main bike image */}
                    <div
                      className="relative w-full h-40 pattern-isometric pattern-blue-500 pattern-bg-white
                     pattern-size-20 pattern-opacity-100 rounded-lg"
                    >
                      <Image
                        src="/bike2.png"
                        alt="bike model"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>
                  </div>

                  {/* Additional Content */}
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {bike.make} {bike.model}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(bike).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex w-full justify-between gap-5"
                        >
                          <h2 className="capitalize text-slate-700 text-left">
                            {key.split("_").join(" ")}
                          </h2>
                          <p className="font-semibold text-right">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default BikeDetails;
