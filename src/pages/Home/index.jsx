import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';

// Data
import navItems from '../../data/navItems';
import taskData from '../../data/taskData';

// Components
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import ContentContainer from '../../components/ContentContainer';
import ReactLoading from 'react-loading';

const Home = () => {
	const { section } = useParams();
	const { pathname } = useLocation();
	const [task, setTask] = useState(undefined);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		const findData = taskData.find((item) => item.section === section);
		findData !== undefined ? setTask(findData) : setTask(undefined);
		setLoading(false);
	}, [section]);

	return (
		<div className='w-screen h-screen max-h-screen bg-zinc-900 text-zinc-200'>
			<div className='max-w-[1920px] h-full grid grid-cols-6 grid-rows-6 mx-auto'>
				<Navbar />
				<Sidebar section={section} navItems={navItems} />

				{loading ? (
					<ContentContainer className='col-span-5 row-span-5 grid place-items-center'>
						<div className='flex flex-col items-center gap-4'>
							<ReactLoading type='spin' color='#fff' height={64} width={64} />
							<span className='text-lg'>Loading</span>
						</div>
					</ContentContainer>
				) : (
					<ContentContainer className='col-span-5 row-span-5 overflow-y-auto'>
						{pathname === '/' ? (
							<>
								<h1 className='text-4xl font-bold w-full text-center p-4'>Home</h1>
								<p className='my-8 px-8 mx-4 text-lg'>
									This page contain all the information about task assignment that given by Alterra Indonesia for Kampus Merdeka.
									<br />
									You can find the task assignment by clicking the navigation on the left side.
								</p>
							</>
						) : task !== undefined ? (
							<>
								<h1 className='text-4xl font-bold w-full text-center p-4'>{task?.title}</h1>

								<div>
									<h2 className='text-xl font-bold ml-8'>Summary</h2>
									<p className='my-8 px-8 mx-4'>{task?.summary}</p>
									<div className='w-full text-center mx-auto'>
										{task?.links.map((item, index) => (
											<a key={index} href={item.url} target='_blank' rel='noopener noreferrer' className='italic underline'>
												{item.name}
											</a>
										))}
									</div>
								</div>

								<div>
									<h2 className='text-xl font-bold ml-8'>Images</h2>
									{task?.images.map((image, index) => (
										<a key={index} href={image} target='_blank' rel='noopener noreferrer'>
											<img src={image} alt={`${task?.title}`} className='w-full max-w-4xl h-auto my-4 rounded-lg mx-auto' />
										</a>
									))}
								</div>
							</>
						) : (
							<>
								<div className='w-full h-full flex items-center justify-center flex-col gap-2'>
									<h1 className='text-6xl font-bold my-8'>No Data</h1>
									<p className='text-lg'>It seems there are no data about this task.</p>
								</div>
							</>
						)}
					</ContentContainer>
				)}
			</div>
		</div>
	);
};

export default Home;
