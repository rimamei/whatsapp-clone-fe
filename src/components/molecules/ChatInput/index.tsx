import React from 'react';
import * as Bs from 'react-icons/bs';
import * as Gr from 'react-icons/gr';
import * as Io from 'react-icons/io';

interface ChatInputProps {
  className?: string;
}

const ChatInput = ({ className }: ChatInputProps) => {
  return (
    <div className={`bg-gray-200 flex items-end p-4 ${className}`}>
      <Bs.BsEmojiSmile className="text-gray-500 mr-4" size={20} />
      <Gr.GrAttachment className="text-gray-300 mr-4" size={20} />
      <textarea
        name=""
        id=""
        className="text-sm overflow-auto w-full rounded min-h-[5vh] max-h-[20vh]"
      ></textarea>
      <Io.IoIosSend size={24} className="rotate-45 text-gray-500 ml-4" />
    </div>
  );
}

export default ChatInput;
