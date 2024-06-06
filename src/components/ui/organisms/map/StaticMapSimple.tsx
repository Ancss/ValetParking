import Image from 'next/image'

export const StaticMapSimple = ({
  position,
  padding = [100, 100, 100],
  className = 'w-full shadow-xl aspect-square',
}: {
  position: { lng: number; lat: number }
  padding?: [number, number, number]
  className?: string
}) => {
  if (!position) {
    return <div className="w-full bg-gray-100 shadow-xl aspect-square" />
  }
  console.log(position)
  const url = `https://api.mapbox.com/styles/v1/mapbox/streets-v12/static/[${position.lng},${position.lat},${position.lng + 0.05},${position.lat + 0.05}]/600x600?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`

  return (
    <Image
      src={url}
      alt="Map"
      className={` ${className}`}
      width={200}
      height={200}
    />
  )
}
