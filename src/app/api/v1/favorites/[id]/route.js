import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
    //get params id
    const id = parseInt(params.id);
  
    //get detail post
    const favorites = await prisma.favorites.findUnique({
      where: {
        id,
      },
    });
  
    if (!favorites) {
      //return response JSON
      return NextResponse.json(
        {
          sucess: true,
          message: "Detail Data Post Not Found!",
          data: null,
        },
        {
          status: 404,
        }
      );
    }
  
    //return response JSON
    return NextResponse.json(
      {
        sucess: true,
        message: "Detail Data Post",
        data: favorites,
      },
      {
        status: 200,
      }
    );
  }

export async function DELETE(request, { params }) {
    //get params id
    const id = parseInt(params.id);
  
    //delete data
    await prisma.favorites.delete({
      where: {
        id,
      },
    });
  
    //return response JSON
    return NextResponse.json(
      {
        sucess: true,
        message: "Data Post Deleted!",
      },
      {
        status: 200,
      }
    );
  }