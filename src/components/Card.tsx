import { Button } from './Button'

interface CardButtons {
  githubLink?: string
  webLink?: string
}

interface CardProps {
  title: string
  description: string
  cardButtons?: CardButtons
}

export function Card({ title, description, cardButtons }: CardProps) {
  return (
    <div
      className="
      flex h-full 
      flex-col 
      space-y-2 
      rounded 
      border 
      border-slate-400 
      p-2 
      4k:space-y-6"
    >
      <header className="flex rounded bg-zinc-200 px-2 py-1 text-xs font-bold uppercase laptop:mb-2 laptop:text-sm desktop:text-xl 2k:text-2xl 4k:px-4 4k:py-6 4k:text-5xl">
        {title}
      </header>
      <p
        className="
        desktop-md:text-2xl 
        text-justify 
        text-sm tablet:text-start 
        tablet:text-base 
        laptop:text-lg 
        desktop:text-xl 
        full-hd:text-3xl 
        4k:text-6xl"
      >
        {description}
      </p>
      {cardButtons && (
        <div className="flex items-center gap-2 text-xs desktop:text-lg full-hd:text-xl 4k:text-3xl">
          {cardButtons.githubLink && (
            <Button
              buttonText="Github"
              href={cardButtons.githubLink}
              buttonType="github"
            />
          )}

          {cardButtons.webLink && (
            <Button
              buttonText="Website"
              href={cardButtons.webLink}
              buttonType="website"
            />
          )}
        </div>
      )}
    </div>
  )
}
