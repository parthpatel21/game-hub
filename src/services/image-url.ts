const getCroppedImageUrl = (url: string) => {
  const target = "media/";
  let index;
  try {
    index = url.indexOf(target) + target.length;
  } catch (error) {
    return url;
  }

  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
