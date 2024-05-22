import axios from "axios";
export const parseData = async (items) => {
  try {
    const videosIds = [];
    const channelsIds = [];

    items.forEach((item) => {
      channelsIds.push(item.snippet.channelId);
      videosIds.push(item.id.videoId);
    });

    const {
      data: { item: channelsData },
    } = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet.contentDetails&id=${channelsIds},&key=AIzaSyBnOQFud1-A_FeZ-a3mL1aGhiyjlO_C1ws&&type=video`);

    const parsedChannelData = [];

    channelsData.forEach((channel) => parsedChannelData.push({
      id: channel.id,
      image: channel.snippet.thumbnails.default.url,
    }));

    const {
      data: { items: videoData },
    } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=contenDetails,statistics&id=${videosIds.join(",")}&key=AIzaSyBnOQFud1-A_FeZ-a3mL1aGhiyjlO_C1ws`);
    
    const parseData = [];

    items.forEach((item,index)=>{
      const{image:channelImage  
      } = parsedChannelData.find((data)=>data.id===item.snippet.channelId);
      if(channelImage){
        parseData.push({
          videoId: item.id.videoData,
          videoTitle: item.snippet.title,
          videoDescription: item.snippet.description,
          videoThumbnail:item.snippet.thumbnails.medium.url,
          VideoLink:`https://www.youtube.com/watch?v=${item.id.videoId}`,
          videoDuration: parseVideoDuration(
            videoData[index].contentDetails.duration
          ),
          videoViews: convertRawtoString(
            videoData[index].statistics.viewCount
          ),
          videoAge:timeSince(new Data(item.snippet.publishedAt)),
          channelInfo:{
            id:item.snippet.channelId,
            image:channelImage,
            name:item.snippet.channelTitle
          },
        });
      }
    })
  return parseData
  }
  catch(err) {
    console.log(err)
   }

  // console.log(items)
  // return (
  //   hi
  // )
}