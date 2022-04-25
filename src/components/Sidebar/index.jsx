import { Link } from 'react-router-dom';
import ContentContainer from '../ContentContainer';

const Sidebar = ({ section, navItems }) => {
	return (
		<ContentContainer className='col-span-1 row-span-5'>
			<h1 className='text-2xl font-bold w-full text-center'>Navigation</h1>
			<div className='w-full h-0.5 bg-zinc-200/50 rounded-full my-4' />
			<ul className='flex flex-col overflow-y-auto'>
				<li className='flex items-center mx-4'>
					<Link
						to='/'
						className={`text-zinc-400 hover:text-zinc-50 transition-all duration-100 hover:pl-4 p-2 ${
							section === undefined && 'text-zinc-50 pl-4'
						}`}
					>
						<span className='text-lg font-bold'>Home</span>
					</Link>
				</li>
				{navItems.map((item, index) => (
					<li key={index} className='flex items-center mx-4'>
						<Link
							to={item.route}
							className={`text-zinc-400 hover:text-zinc-50 transition-all duration-100 hover:pl-4 p-2 ${
								item.route.includes(section) && 'text-zinc-50 pl-4'
							} `}
						>
							<span>{item.name}</span>
						</Link>
					</li>
				))}
			</ul>
		</ContentContainer>
	);
};

export default Sidebar;
