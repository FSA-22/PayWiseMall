import { SearchIcon } from 'lucide-react';

export const SearchInput = () => {
  return (
    <div className="flex items-center bg-white rounded-lg px-4 py-2 w-full max-w-full">
      <input
        type="text"
        placeholder="Search anything..."
        className="flex-1 outline-none text-sm text-primary-1 placeholder:text-gray-400"
      />
      <SearchIcon className="text-gray-400" height={16} width={16} />
    </div>
  );
};
