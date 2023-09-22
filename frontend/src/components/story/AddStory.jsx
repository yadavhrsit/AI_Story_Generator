import React, { useState } from 'react';
import { primary, secondary } from '../../colors';

function AddStory() {
  const [ideaInput, setIdeaInput] = useState('');
  const [tags, setTags] = useState([]);
  const [error, setError] = useState('');

  const handleIdeaInputChange = (e) => {
    setIdeaInput(e.target.value);
    setError('');
  };

  const handleTagInputChange = (e) => {
    if (e.key === 'Enter' && e.target.value.trim() !== '') {
      if (tags.length < 3) {
        setTags([...tags, e.target.value.trim()]);
        e.target.value = '';
      }
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = () => {
    if (!ideaInput || ideaInput.trim().split(/\s+/).length > 50) {
      setError('Story idea is required and should be up to 50 words.');
      return;
    }
    console.log('Story Idea:', ideaInput);
    console.log('Tags:', tags);
  };

  return (
    <div className='absolute flex items-center justify-center w-screen h-screen bg-[#00000075] px-4 font-[magra] text-xl font-medium'>
      <div className={`bg-[${primary}] text-[${primary}] rounded-2xl px-4 py-8 w-full lg:w-3/4`}>
        <p className='text-white'>Wish for a Story</p>
        <textarea
          className="w-full h-32 mt-2 p-2 border rounded-lg "
          placeholder="Enter your story idea... (Up to 50 words)"
          value={ideaInput}
          onChange={handleIdeaInputChange}
        />
        {error && <p className="text-red-500">{error}</p>}
        <p className='text-white'>Tags (Maximum 3):</p>
        <div className="flex flex-wrap items-center mt-2">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="bg-[#f0f0f0] px-2 py-2 rounded-lg mr-2 mt-2 flex items-center"
            >
              {tag}
              <button
                className={`ml-2 px-3 pb-[4px] pt-[1px] rounded-full text-red-500 bg-[${primary}]`}
                onClick={() => handleRemoveTag(tag)}
              >
                x
              </button>
            </div>
          ))}
          <input
            className="flex-grow border rounded px-2 py-1"
            placeholder="Add tag and press Enter *optional"
            onKeyDown={handleTagInputChange}
          />
        </div>
        <button
          className={`bg-[${secondary}] text-white px-4 py-2 mt-8 rounded-lg`}
          onClick={handleSubmit}
        >
          Wish Story
        </button>
      </div>
    </div>
  );
}

export default AddStory;
