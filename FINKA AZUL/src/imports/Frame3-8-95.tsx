import svgPaths from "./svg-6e85aeeqqj";

function Icon() {
  return (
    <div className="h-[95.688px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-3/4 left-[33.33%] right-[66.67%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-18.75%_-2.99px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.98047 21.9284">
            <path d="M2.99023 2.99023V18.9382" id="Vector" stroke="var(--stroke-0, #A8D8D8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.98047" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[66.67%] right-[33.33%] top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-18.75%_-2.99px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.98047 21.9284">
            <path d="M2.99023 2.99023V18.9382" id="Vector" stroke="var(--stroke-0, #A8D8D8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.98047" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[16.67%_12.5%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.7461 77.7461">
            <path d={svgPaths.p1a1d8280} id="Vector" stroke="var(--stroke-0, #A8D8D8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.98047" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_12.5%_58.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-2.99px_-4.17%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 77.7461 5.98047">
            <path d="M2.99023 2.99023H74.7559" id="Vector" stroke="var(--stroke-0, #A8D8D8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.98047" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 size-[95.688px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex h-[95.688px] items-start justify-center left-[535px] px-[666.623px] top-[301px] w-[1428.933px]" data-name="Container">
      <Container1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-[#f7f3e8] h-[1015px] left-0 top-0 w-[2462px]" />
      <div className="absolute bg-[#a8d8d8] h-[133.793px] left-[993px] rounded-[185.366px] top-[696px] w-[512px]" />
      <p className="absolute font-['Playfair_Display:Regular',sans-serif] font-normal leading-[89.311px] left-[1091px] text-[49.617px] text-black top-[718px] whitespace-nowrap">Reserva ahora</p>
      <p className="absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[73px] left-[604px] text-[#3795b4] text-[63.545px] top-[177px] w-[1289px]">{`Un lujo diferente, desconectar para conectar `}</p>
      <p className="-translate-x-1/2 absolute font-['Playfair_Display:SemiBold',sans-serif] font-semibold leading-[62.4px] left-[1223.5px] text-[48px] text-black text-center top-[428px] whitespace-nowrap">Planea tu estancia en Finka Azul</p>
      <p className="-translate-x-1/2 absolute font-['Inter:Regular',sans-serif] font-normal leading-[54.982px] left-[1294.5px] not-italic text-[30.545px] text-black text-center top-[556px] whitespace-nowrap">Elige tus fechas, confirma tu reserva y prepárate para una experiencia tranquila rodeada de naturaleza.</p>
      <Container />
    </div>
  );
}