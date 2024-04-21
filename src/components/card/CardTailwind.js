import React from 'react';

const CardTailwind = () => {
    return (
        <div className='relative'>
            <div className='w-full rounded-lg h-[400px]'>
                <img src="https://cdn.dribbble.com/userupload/13529968/file/original-8e6f181f2afeaa0c66ae8ad68aa8ddb5.png?resize=1024x768" alt="avatar"/>
            </div>
            <div>
                <div>
                    <div>
                        <div>
                            <img src="https://cdn.dribbble.com/userupload/13529968/file/original-8e6f181f2afeaa0c66ae8ad68aa8ddb5.png?resize=1024x768" alt="avatar"/>
                        </div>
                        <p>@zndrson</p>
                    </div>
                    <div>
                        <img src="/icon-h.svg" alt="heart" />
                        <p>256</p>
                    </div>
                </div>

                <div>
                    <p>Cosmic Perspective</p>
                    <p>12,000 PSL</p>
                </div>
            </div>
        </div>
    );
};

export default CardTailwind;