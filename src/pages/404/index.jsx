// Data
import navItems from '../../data/navItems';

// Components
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import ContentContainer from '../../components/ContentContainer';

const PageNotFound = () => {
	return (
		<div className='w-screen h-screen max-h-screen bg-zinc-900 text-zinc-200'>
			<div className='max-w-[1920px] h-full grid grid-cols-6 grid-rows-6 mx-auto'>
				<Navbar />
				<Sidebar section={'404'} navItems={navItems} />

				<ContentContainer className='col-span-5 row-span-5 grid place-items-center'>
					<div>
						<h1 className='font-bold text-6xl text-center my-8'>{'404 Not Found :('}</h1>
						<p className='text-lg text-center'>
							I'm sorry but I can't find the page you're looking for.
							<br />
							Please recheck the link or simply use the navigation on the left side.
						</p>
					</div>
				</ContentContainer>
			</div>
		</div>
	);
};

export default PageNotFound;
