using System;
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
            CreateMap<DeviceModel, Device>(MemberList.None)
                .ForMember(d=>d.TotalRate,opt=>opt.Ignore())
                .ForMember(d=>d.TotalReviews, opt=>opt.Ignore());
            
            CreateMap<ReviewModel, Review>(MemberList.None)
                .ForMember(
                    d => d.UserID,
                    opt => opt.MapFrom(src => src.CreatorId)
                )
                .ReverseMap();

            CreateMap<Order, OrderModel>(MemberList.None);
            CreateMap<OrderModel, Order>(MemberList.None)
                .ForMember(
                    dest=>dest.Total,
                    opt=> opt.MapFrom(src => 
                        Math.Round((src.DateEnd - src.DateStart).TotalHours) * src.Device.Price
                        ));
        }
    }
}