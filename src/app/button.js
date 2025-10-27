export default function Button({ onClick, children, className, id }) {
  return (
    <button onClick={onClick} id={id}
            className={`px-3.5 py-3 text-sm hover:bg-black text-gray cursor-pointer rounded-full shadow-[0px_0px_35px_rgba(0,0,0,0.75),-1px_0px_8px_rgba(255,255,255,0.20)]  ${className === `${id}` ? 'bg-linear-to-r from-[#64717e] to-[#344454]' : 'bg-linear-to-r from-[#303439] to-[#161718] hover:from-black hover:to-[#171717]'}`}>
                        {children}
    </button>
  );
}