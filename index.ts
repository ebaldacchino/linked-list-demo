interface IImageData {
	text: string;
}

const imageData: IImageData[] = [
	{ text: 'one' },
	{ text: 'two' },
	{ text: 'three' },
];

type IImage = IImageData & {
	prev: IImage;
	next: IImage;
};

const images = imageData.reduce<IImage[]>((total, current, index) => {
	let newObj = current as IImage;
	newObj.next = total[index + 1] ?? total[0];
	newObj.prev = total[index - 1] ?? total[total.length - 1];
	return [...total, newObj];
}, imageData as IImage[]);

var selectedImage = images[0];
for (let i = 0; i < 10; i++) {
	console.log(selectedImage.text);
	selectedImage = selectedImage.next;
}
