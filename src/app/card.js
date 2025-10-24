export default function Card() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">        
        <div className="flex flex-col items-center p-6">
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Card Title</h5>
            <p className="mb-2 text-gray-500 dark:text-gray-400">This is a simple card component.</p>
            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">Learn more</a>
        </div>
    </div>
  );
}

