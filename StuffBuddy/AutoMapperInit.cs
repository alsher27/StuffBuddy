using AutoMapper;
using StuffBuddy.Business.Models;
using StuffBuddy.DAL.Entities;

namespace StuffBuddy.Business
{
    public class AutoMapperInit : Profile
    {
        public AutoMapperInit()
        {
            CreateMap<Device, DeviceModel>(MemberList.None)
                .ForMember(
                    d => d.Rating,
                    opt => opt.MapFrom(src => src.TotalReviews == 0 ? 0 : src.TotalRate / src.TotalReviews)
                );
            CreateMap<DeviceModel, Device>(MemberList.None);
        }
    }
}