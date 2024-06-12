export function SvgWrapper({
  width,
  height,
  aspectRatio,
  children,
}: {
  width: number | string | undefined;
  height?: number | string | undefined;
  aspectRatio: number;
  children: React.ReactNode;
}) {
  return (
    <View
      style={{
        width: width,
        height: height,
      }}>
      <View style={{aspectRatio: aspectRatio}}>{children}</View>
    </View>
  );
}
