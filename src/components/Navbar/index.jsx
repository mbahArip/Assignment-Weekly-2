import ContentContainer from '../ContentContainer';

const Navbar = () => {
	return (
		<ContentContainer className='col-span-full flex items-center justify-between'>
			<div className='flex h-full items-center w-full'>
				<img src='/images/navbar-icon.svg' alt='icon' className='max-h-full p-4 opacity-80' />
				<h1 className='font-bold text-2xl'>Arief Rachmawan - React Kelas A</h1>
			</div>
			<div>
				<img src='/images/ava.png' alt='Arief Rachmawan' className='rounded-full h-24 w-24 mr-8' />
			</div>
		</ContentContainer>
	);
};

export default Navbar;
