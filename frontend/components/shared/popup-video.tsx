import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import PlayIcon from '../icons/play-icon';

const PopupVideo = () => {
    return (
        <Dialog>
            <DialogTrigger className='popup-video'>
                <PlayIcon />
            </DialogTrigger>

            <DialogContent>
                <VisuallyHidden asChild>
                    <DialogHeader>
                        <DialogTitle className='hidden' />
                        <DialogDescription className='hidden' />
                    </DialogHeader>
                </VisuallyHidden>

                <iframe
                    src='https://youtube.com/embed/zpOULjyy-n8?rel=0'
                    title='youtube video'
                    className='aspect-video w-10/12 md:w-full mx-auto'
                    frameBorder='0'
                    allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                />
            </DialogContent>
        </Dialog>
    );
};

export default PopupVideo;
