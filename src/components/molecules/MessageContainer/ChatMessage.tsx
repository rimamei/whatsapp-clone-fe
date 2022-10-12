import React from 'react';

const Position = {
  1: 'flex justify-end',
  2: 'rounded-tr-lg flex justify-start',
};

const Rounded = {
  1: 'rounded-tl-lg ',
  2: 'rounded-tr-lg',
};

const TailPosition = {
  1: 'right-[-8px] top-0',
  2: 'left-[-8px] top-0',
};

interface ChatMessageProps {
  className?: string;
  message: string;
  user: keyof typeof Position | keyof typeof Rounded | keyof typeof TailPosition;
}

const ChatMessage = (props: ChatMessageProps) => {
  const { className, user, message } = props;

  const classes = [Position[user], className].join(' ').replace(/\s+/g, ' ');

  const tailOut = () => {
    return (
      <svg viewBox="0 0 8 13" width="8" height="13" className="">
        <path
          opacity=".13"
          d="M5.188 1H0v11.193l6.467-8.625C7.526 2.156 6.958 1 5.188 1z"
        ></path>
        <path
          fill="#93F3D0"
          d="M5.188 0H0v11.193l6.467-8.625C7.526 1.156 6.958 0 5.188 0z"
        ></path>
      </svg>
    );
  };

  const tailIn = () => {
    return (
      <svg viewBox="0 0 8 13" width="8" height="13" className="">
        <path
          opacity=".13"
          fill="#93F3D0"
          d="M1.533 3.568 8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"
        ></path>
        <path
          fill="#93F3D0"
          d="M1.533 2.568 8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"
        ></path>
      </svg>
    );
  };

  return (
    <div className={classes}>
      <div className={`${Rounded[user]} flex mb-4 relative p-2 w-fit rounded-b-lg bg-emerald-200 min-w-[10%] mx-4 lg:mx-24 max-w-[70%]`}>
        <span className={`${TailPosition[user]} absolute z-100 block w-2 h-[13px]`}>{user === 1 ? tailOut() : tailIn()}</span>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ChatMessage;
