import { useEffect, useState } from 'react';
import type { SimpleIcon } from 'react-icon-cloud';
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from 'react-icon-cloud';

type FetchSimpleIconsProps = {
  simpleIcons: Record<string, SimpleIcon>;
  allIcon: Record<string, {
    title: string;
    hex: string;
    slug: string;
  }>;
}

const useIcons = (slugs: string[]) => {
  const [icons, setIcons] = useState<FetchSimpleIconsProps>()

  useEffect(() => {
    fetchSimpleIcons({ slugs }).then(setIcons)
  }, [slugs])

  if (icons) {
    return Object.values(icons.simpleIcons).map((icon) => renderSimpleIcon({
      icon,
      size: 100,
      aProps: {
        onClick: (e: any) => e.preventDefault()
      }
    }))
  }

  return <div>Loading</div>
}

type IconCloudProps = {
  slugs: string[];
}

const IconCloud = ({ slugs }: IconCloudProps) => {
  const icons = useIcons(slugs)

  return <Cloud id='canvas'>
    {icons}
  </Cloud>
}

export default IconCloud