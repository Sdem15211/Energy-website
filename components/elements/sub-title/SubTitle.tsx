import cx from "clsx";

type SubTitle = {
  subTitle: string;
  className?: string;
};

export const SubTitle = ({ subTitle, className }: SubTitle) => {
  return (
    <div className="flex w-full text-white items-center gap-2 border-b border-neutral-300 pb-4 mb-12 sm:mb-14">
      <span className="w-2 h-2 rounded-full bg-primary-300 block" />
      <span className={cx(className)}>{subTitle}</span>
    </div>
  );
};
