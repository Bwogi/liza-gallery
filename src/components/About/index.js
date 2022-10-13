import coverImage from '../../assets/cover/cover-image.jpg';

export default function About() {
	return (
		<section id='about' className='bg-white'>
			<div className='mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
				<div className='text-center'>
					<h2 className='text-lg font-semibold text-indigo-600'>About Us</h2>
					<p className='mt-1 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl'>
						Take control of your team.
					</p>
					<p className='mx-auto mt-5 max-w-xl text-xl text-gray-500'>
						Start building for free, then add a site plan to go live. Account
						plans unlock additional features.
					</p>
					<img className='my-6 w-[100%]' src={coverImage} alt='cover image' />
				</div>
			</div>
		</section>
	);
}
