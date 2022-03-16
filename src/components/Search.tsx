import React, { useState } from 'react';

type UserType = {
  id: string;
  login: string;
  name: string | null;
  bio: string | null;
  avatarUrl: any;
};

type UserProps = {
  user: UserType | null;
};

function Search({ user }: UserProps): React.ReactElement {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <section className="absolute top-8 left-10 rounded-lg bg-white px-6  pt-2 pb-4 shadow-lg first-letter:space-y-4">
      <form className="flex items-center space-x-2" onSubmit={handleSubmit}>
        <input
          className="border-b border-gray-200 px-1 py-2 placeholder:text-base focus:outline-none focus:ring-0"
          placeholder="Github 아이디 검색"
          value={value}
          onChange={handleChange}
        />
        <button type="submit" className="text-gray-500">
          ⏎
        </button>
      </form>
      {user && (
        <>
          <div className="mt-4 flex items-center space-x-4">
            <img src={user.avatarUrl} alt="github profile" className="h-12 w-12 rounded-2xl" />
            <div className="text-sm text-gray-600">
              <p className="space-x-1">
                <a
                  href={`https://github.com/${user.login}`}
                  className="font-semibold hover:text-black"
                >
                  {user.login}
                </a>
                <span className="ml-1">{`(${user.name})`}</span>
              </p>
              {user.bio && <p className="text-ellipsis">{user.bio}</p>}
            </div>
          </div>
          <p className="mt-4 pt-4 text-sm text-gray-400">
            * 유저들 간의 스타를 누른 리포지토리 관계를 보여줍니다.
          </p>
        </>
      )}
    </section>
  );
}

export default Search;