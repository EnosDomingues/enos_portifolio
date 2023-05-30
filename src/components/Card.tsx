/* eslint-disable camelcase */
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

// Card header style
const { header_2k, header_4k, header_fullHd, header_laptop, header_style } = {
  header_style:
    'flex rounded bg-zinc-200 px-2 py-1 text-xs font-bold uppercase',
  // Responsivity
  header_4k: ' 4k:px-4 4k:py-6 4k:text-5xl ',
  header_2k: ' 2k:text-2xl ',
  header_fullHd: ' 2k:text-2xl ',
  header_laptop: ' laptop:text-sm laptop:mb-2',
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
      <header
        className={`${header_style} ${header_laptop} ${header_fullHd} ${header_2k} ${header_4k}`}
      >
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
