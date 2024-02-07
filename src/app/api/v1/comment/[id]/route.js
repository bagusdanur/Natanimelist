import prisma from "@/libs/prisma";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
    //get params id
    const id = parseInt(params.id);
  
    //get detail post
    const comment = await prisma.comment.findUnique({
      where: {
        id,
      },
    });
  
    if (!comment) {
      return NextResponse.json(
        {
          sucess: true,
          message: "Detail Data Not Found!",
          data: null,
        },
        {
          status: 404,
        }
      );
    }
  
    return NextResponse.json(
      {
        sucess: true,
        message: "Detail Data",
        data: comment,
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
    await prisma.comment.delete({
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