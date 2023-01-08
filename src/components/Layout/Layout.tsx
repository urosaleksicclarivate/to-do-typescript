import MainNavigation from "./MainNavigation";
interface Props {
  children: React.ReactElement;
}
const Layout: React.FC<Props> = (props: Props) => {
  return (
    <>
      <MainNavigation />
      <main>{props.children}</main>
    </>
  );
};
export default Layout;
