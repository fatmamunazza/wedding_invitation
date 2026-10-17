function getAnimationStyle(delay, style) {
  return { ...style, "--animation-delay": `${delay}ms` };
}

export function AnimatedGroup({
  as: Component = "div",
  children,
  className = "",
  delay = 0,
  style,
}) {
  return (
    <Component
      className={`animated-group ${className}`.trim()}
      style={getAnimationStyle(delay, style)}
    >
      {children}
    </Component>
  );
}

export function AnimatedText({
  as: Component = "span",
  children,
  className = "",
  delay = 0,
  style,
}) {
  return (
    <Component
      className={`animated-text ${className}`.trim()}
      style={getAnimationStyle(delay, style)}
    >
      {children}
    </Component>
  );
}

export function AnimatedImage({
  src,
  alt = "",
  className = "",
  delay = 0,
  style,
  ...props
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`animated-image ${className}`.trim()}
      style={getAnimationStyle(delay, style)}
      {...props}
    />
  );
}

export function AnimatedButton({
  children,
  className = "",
  delay = 0,
  style,
  ...props
}) {
  return (
    <button
      className={`animated-button ${className}`.trim()}
      style={getAnimationStyle(delay, style)}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
}
