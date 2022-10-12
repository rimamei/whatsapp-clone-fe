import React, { MutableRefObject, useEffect, useRef } from 'react';
import * as Fa from 'react-icons/fa';
import ChatMessage from './ChatMessage';

interface MessageContainerProps {
  className?: string;
}

const MessageContainer = ({ className }: MessageContainerProps) => {
  const scrollMessage = useRef() as MutableRefObject<HTMLDivElement>;

  const scrollToBottom = () => {
    scrollMessage.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div className={`relative overflow-y-scroll`}>
      {Array(20)
        .fill('')
        .map((item, index) => (
          <ChatMessage
            user={1}
            message={`test test`}
            className={index === 0 ? 'mt-4' : ''}
          />
        ))}
      <button
        type="button"
        onClick={scrollToBottom}
        className="w-7.5 h-7.5 flex items-center justify-center rounded-full border-none outline-none fixed right-[30px] bottom-[100px] transistion ease-out"
      >
        <Fa.FaAngleDown size={15} color="#919191" />
      </button>
      <div ref={scrollMessage} />
    </div>
  );
}

export default MessageContainer;
