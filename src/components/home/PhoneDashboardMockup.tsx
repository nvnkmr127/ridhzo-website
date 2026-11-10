/**
 * Live Ridhzo mobile Executive Dashboard UI (Figma 573:25153 at 273×589.729px),
 * wrapped inside the Apple iPhone XS Silver bezel (/figma/f1d24.png).
 * Reused at 1× in MobileExperienceSection and 0.5657× in HomeHero.
 */
export function PhoneDashboardScreen() {
  return (
    <div className="relative h-[589.729px] w-[273px] overflow-hidden bg-[#0a0a0a] text-left">
      <div className="flex h-full w-full flex-col">
        {/* Mobile App Header */}
        <div className="flex h-[47.691px] shrink-0 items-end border-b-[0.697px] border-[#292929] bg-[#0a0a0a] px-[11.15px] pb-[6.154px]">
          <div className="flex flex-1 items-center gap-[5.575px]">
            <div className="relative flex h-[25.088px] w-[22.301px] shrink-0 items-center justify-center">
              <span className="relative size-[13.938px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" src="/figma/bc39c.svg" className="block size-full max-w-none" />
              </span>
            </div>
            <div className="relative h-[6.368px] w-[40.754px] shrink-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="Ridhzo Starter" src="/figma/f775a.png" className="block size-full max-w-none object-contain" />
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-[11.15px]">
            <div className="relative flex size-[27.876px] items-center justify-center rounded-full bg-[#212121]">
              <span className="relative size-[11.15px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt="" src="/figma/7873d.svg" className="block size-full max-w-none" />
              </span>
              <span className="absolute right-[-2.77px] top-[-2.79px] flex h-[13.938px] min-w-[13.938px] items-center justify-center rounded-full bg-[#2b2b2b] px-[4.49px] text-[8.363px] font-semibold leading-[11.15px] text-[#f5f5f5]">
                7
              </span>
            </div>
            <div className="flex size-[27.876px] items-center justify-center rounded-full bg-[#212121] text-[9.756px] font-semibold leading-[13.938px] text-[#f5f5f5]">
              NA
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="flex flex-1 flex-col gap-[16.725px] overflow-hidden p-[11.15px]">
          <div className="flex flex-col gap-[11.15px]">
            <div>
              <p className="text-[20.907px] font-bold leading-[25.088px] tracking-[-0.5227px] text-[#f5f5f5]">
                Executive Dashboard
              </p>
              <p className="text-[9.756px] font-normal leading-[13.938px] text-[#adadad]">
                Showing the last 7 days, compared with the period before.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="relative h-[80.84px] w-full">
              <span className="absolute left-0 top-[4px] inline-flex h-[22.301px] items-center justify-center rounded-[6.969px] border-[0.697px] border-[#292929] px-[8.363px] text-[8.363px] font-medium leading-[11.15px] text-[#f5f5f5]">
                Today
              </span>
              <span className="absolute left-[47.38px] top-[4px] inline-flex h-[22.301px] items-center justify-center rounded-[6.969px] bg-[#f5f5f5] px-[8.363px] text-[8.363px] font-medium leading-[11.15px] text-[#0f0f0f]">
                Last 7 Days
              </span>
              <span className="absolute left-[115.63px] top-[4px] inline-flex h-[22.301px] items-center justify-center rounded-[6.969px] border-[0.697px] border-[#292929] px-[8.363px] text-[8.363px] font-medium leading-[11.15px] text-[#f5f5f5]">
                Last 30 Days
              </span>
              <span className="absolute left-0 top-[31.88px] inline-flex h-[22.301px] items-center justify-center rounded-[6.969px] border-[0.697px] border-[#292929] px-[8.363px] text-[8.363px] font-medium leading-[11.15px] text-[#f5f5f5]">
                This Month
              </span>
              <span className="absolute left-[67.76px] top-[31.88px] inline-flex h-[22.301px] items-center justify-center rounded-[6.969px] border-[0.697px] border-[#292929] px-[8.363px] text-[8.363px] font-medium leading-[11.15px] text-[#f5f5f5]">
                Last Month
              </span>
              <span className="absolute left-[136.35px] top-[31.88px] inline-flex h-[22.301px] items-center justify-center rounded-[6.969px] border-[0.697px] border-[#292929] px-[8.363px] text-[8.363px] font-medium leading-[11.15px] text-[#f5f5f5]">
                All Time
              </span>
              <span className="absolute left-0 top-[59.75px] inline-flex h-[25.088px] w-[111.503px] items-center justify-between rounded-[8.363px] border-[0.697px] border-[#292929] bg-[#121212] px-[9.756px] py-[5.575px] text-[9.756px] text-[#f5f5f5]">
                <span>Everyone</span>
                <span className="relative size-[11.15px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" src="/figma/ab64a.svg" className="block size-full max-w-none" />
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-[16.725px]">
            {/* Today Section */}
            <div className="flex w-[249.487px] flex-col gap-[13.938px] rounded-[11.15px] border-[0.697px] border-[#292929] bg-[#121212] p-[16.725px]">
              <div className="flex flex-col gap-[5.575px]">
                <div>
                  <p className="text-[12.544px] font-medium leading-[19.513px] text-[#f5f5f5]">Today</p>
                  <p className="text-[8.363px] font-normal leading-[11.15px] text-[#adadad]">
                    Thursday, 15 Oct · what needs attention across the team
                  </p>
                </div>
                <p className="text-[8.363px] font-normal leading-[11.15px] text-[#adadad]">
                  Morning email settings
                </p>
              </div>

              {/* 2x3 KPI Grid */}
              <div className="grid grid-cols-2 gap-[8.363px]">
                <div className="flex flex-col rounded-[8.363px] border-[0.697px] border-[#292929] px-[8.363px] pb-[19.513px] pt-[8.363px]">
                  <span className="relative size-[11.15px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/fb65f.svg" className="block size-full max-w-none" />
                  </span>
                  <span className="pt-[5.575px] text-[16.725px] font-bold leading-[22.301px] text-[#f47c7c]">3</span>
                  <span className="text-[8.363px] leading-[11.15px] text-[#adadad]">Overdue follow-ups</span>
                  <span className="text-[7.666px] leading-[11.499px] text-[#f47c7c]">▲ 3 vs yesterday</span>
                </div>

                <div className="flex flex-col rounded-[8.363px] border-[0.697px] border-[#292929] p-[8.363px] opacity-60">
                  <span className="relative size-[11.15px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/c46b5.svg" className="block size-full max-w-none" />
                  </span>
                  <span className="pt-[5.575px] text-[16.725px] font-bold leading-[22.301px] text-[#f5f5f5]">0</span>
                  <span className="text-[8.363px] leading-[11.15px] text-[#adadad]">
                    Meetings without outcome
                  </span>
                  <span className="text-[7.666px] leading-[11.499px] text-[#adadad]">same as yesterday</span>
                </div>

                <div className="flex flex-col rounded-[8.363px] border-[0.697px] border-[#292929] p-[8.363px]">
                  <span className="relative size-[11.15px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/28658.svg" className="block size-full max-w-none" />
                  </span>
                  <span className="pt-[5.575px] text-[16.725px] font-bold leading-[22.301px] text-[#f47c7c]">2</span>
                  <span className="text-[8.363px] leading-[11.15px] text-[#adadad]">
                    Not contacted after 24h
                  </span>
                  <span className="text-[7.666px] leading-[11.499px] text-[#059669]">▼ 1 vs yesterday</span>
                </div>

                <div className="flex flex-col rounded-[8.363px] border-[0.697px] border-[#292929] px-[8.363px] pb-[19.513px] pt-[8.363px] opacity-60">
                  <span className="relative size-[11.15px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/4a7f7.svg" className="block size-full max-w-none" />
                  </span>
                  <span className="pt-[5.575px] text-[16.725px] font-bold leading-[22.301px] text-[#f5f5f5]">0</span>
                  <span className="text-[8.363px] leading-[11.15px] text-[#adadad]">Unassigned leads</span>
                  <span className="text-[7.666px] leading-[11.499px] text-[#adadad]">same as yesterday</span>
                </div>

                <div className="flex flex-col rounded-[8.363px] border-[0.697px] border-[#292929] p-[8.363px]">
                  <span className="relative size-[11.15px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/d6119.svg" className="block size-full max-w-none" />
                  </span>
                  <span className="pt-[5.575px] text-[16.725px] font-bold leading-[22.301px] text-[#f5f5f5]">1</span>
                  <span className="text-[8.363px] leading-[11.15px] text-[#adadad]">Meetings left today</span>
                  <span className="text-[7.666px] leading-[11.499px] text-[#adadad]">▲ 1 vs yesterday</span>
                </div>

                <div className="flex flex-col rounded-[8.363px] border-[0.697px] border-[#292929] p-[8.363px]">
                  <span className="relative size-[11.15px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src="/figma/8b4df.svg" className="block size-full max-w-none" />
                  </span>
                  <span className="pt-[5.575px] text-[16.725px] font-bold leading-[22.301px] text-[#f5f5f5]">2</span>
                  <span className="text-[8.363px] leading-[11.15px] text-[#adadad]">New leads (24h)</span>
                  <span className="text-[7.666px] leading-[11.499px] text-[#adadad]">▼ 3 vs yesterday</span>
                </div>
              </div>

              {/* Backlog + Calls */}
              <div className="flex flex-col gap-[13.938px]">
                <div className="flex flex-col gap-[5.575px]">
                  <p className="text-[8.363px] font-medium uppercase leading-[11.15px] tracking-[0.2091px] text-[#adadad]">
                    Backlog by person
                  </p>
                  <div className="flex items-center justify-between text-[9.756px] leading-[13.938px]">
                    <span className="text-[#f5f5f5]">Sneha H A</span>
                    <span className="text-[#adadad]">3 overdue</span>
                  </div>
                </div>
                <div className="flex flex-col gap-[5.575px]">
                  <div className="flex items-center gap-[4.181px]">
                    <span className="relative size-[9.756px] shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="" src="/figma/e41ed.svg" className="block size-full max-w-none" />
                    </span>
                    <p className="text-[8.363px] font-medium uppercase leading-[11.15px] tracking-[0.2091px] text-[#adadad]">
                      Calls in the last 24h
                    </p>
                  </div>
                  <p className="pl-[8.363px] text-[9.756px] leading-[13.938px] text-[#adadad]">
                    31 calls · 6 of 28 answered · 10m 27s talk time
                  </p>
                </div>
              </div>
            </div>

            {/* Lead Distribution Chart */}
            <div className="flex min-h-[243.9px] w-[249.487px] flex-col rounded-[11.15px] border-[0.697px] border-[#292929] bg-[#121212] p-[16.725px]">
              <p className="pb-[2.788px] text-[12.544px] font-medium leading-[19.513px] text-[#f5f5f5]">
                Lead Distribution by Owner
              </p>
              <p className="pb-[11.15px] text-[8.363px] leading-[11.15px] text-[#adadad]">
                Lead count assigned per team member.
              </p>
              <div className="relative h-[209.068px] w-[214.643px] overflow-hidden">
                <div className="absolute inset-[1.67%_6.49%_11.67%_38.95%]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" src="/figma/f566d.svg" className="block size-full max-w-none" />
                </div>
                <div className="absolute inset-[40.33%_15.59%_50.33%_38.95%]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img alt="" src="/figma/084ac.svg" className="block size-full max-w-none" />
                </div>
                <span className="absolute inset-[89.84%_59.55%_5.38%_37.66%] text-center font-inter text-[8.363px] text-[#8a8a8f]">
                  0
                </span>
                <span className="absolute inset-[89.84%_45.91%_5.38%_51.29%] text-center font-inter text-[8.363px] text-[#8a8a8f]">
                  3
                </span>
                <span className="absolute inset-[89.84%_32.27%_5.38%_64.93%] text-center font-inter text-[8.363px] text-[#8a8a8f]">
                  6
                </span>
                <span className="absolute inset-[89.84%_18.64%_5.38%_78.56%] text-center font-inter text-[8.363px] text-[#8a8a8f]">
                  9
                </span>
                <span className="absolute inset-[89.84%_4.41%_5.38%_91.39%] text-center font-inter text-[8.363px] text-[#8a8a8f]">
                  12
                </span>
                <span className="absolute inset-[42.42%_63.55%_52.8%_16.88%] text-right font-inter text-[8.363px] text-[#8a8a8f]">
                  Sneha H A
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Assistant FAB */}
      <div className="absolute bottom-[11.15px] right-[8.56px] flex size-[30.663px] items-center justify-center rounded-full bg-[#f5f5f5] shadow-[0px_6.969px_10.453px_-2.091px_rgba(0,0,0,0.1),0px_2.788px_4.181px_-2.788px_rgba(0,0,0,0.1)]">
        <span className="relative size-[16.725px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="" src="/figma/1a16e.svg" className="block size-full max-w-none" />
        </span>
      </div>
    </div>
  );
}

