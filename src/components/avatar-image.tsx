import cn from '../lib/class-names'

interface IProps {
  image: string
  alt: string
  className?: string
}

const AvatarImage = ({ image, alt, className }: IProps) => (
  <img
    src={image}
    className={cn('rounded-full overflow-hidden', className)}
    alt={alt}
  />
)

export default AvatarImage
