import React from 'react'

// TypeScript interface for component props
interface ResponsiveHeaderProps {
  title: string
  description?: string
  titleColor?: string
  descriptionColor?: string
  topSpacing?: 'none' | 'small' | 'default' | 'large' | string
  className?: string
  titleClassName?: string
  descriptionClassName?: string
}

const ResponsiveHeader: React.FC<ResponsiveHeaderProps> = ({
  title,
  description,
  titleColor = '#272727',
  descriptionColor = '#252525CC',
  topSpacing = 'default',
  className = '',
  titleClassName = '',
  descriptionClassName = ''
}) => {
  // Handle different spacing options based on Figma measurements
  const getSpacingClass = (spacing: string): string => {
    switch (spacing) {
      case 'none':
        return ''
      case 'small':
        return 'mt-6 sm:mt-8 md:mt-10 lg:mt-12'
      case 'large':
        return 'mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28 2xl:mt-32'
      case 'default':
        return 'mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24 2xl:mt-28'
      default:
        return spacing // Allow custom classes
    }
  }

  const spacingClass = getSpacingClass(topSpacing)

  return (
    <header className={`px-3 md:max-w-[70%] mx-auto ${className}`}>
      <h2 
        className={`
          font-semibold 
          text-2xl sm:text-[28px] md:text-[34px] lg:text-[46px] 
          text-center 
          leading-[125%] 
          ${spacingClass}
          ${titleClassName}
        `}
        style={{ color: titleColor }}
      >
        {title}
      </h2>
      
      {description && (
        <p 
          className={`
            text-sm md:text-[18px] 
            text-center 
            font-normal 
            leading-[125%] 
            mt-[14px] 
            md:w-[85%] 
            mx-auto
            ${descriptionClassName}
          `}
          style={{ color: descriptionColor }}
        >
          {description}
        </p>
      )}
    </header>
  )
}

export default ResponsiveHeader