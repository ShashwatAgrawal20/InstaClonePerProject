const MiniProfile = () => {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            {/* Gonna fetch data from the actual user logged in */}
            <img className="rounded-full border p-[2px] w-16 h-16" src="/next.svg" alt="" />
            <div className="flex-1 mx-4">
                <h2 className="font-bold">Shashwat</h2>
                <h3 className="text-sm text-gray-400">Hope you are doing great</h3>
            </div>

            {/* Just for now gonna only be renderd when we are logged in */}
            <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
        </div>
    )
}

export default MiniProfile