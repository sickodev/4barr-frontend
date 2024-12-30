"use client";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { postFormSchema, PostFormSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "../ui/textarea";
import { H3 } from "../ui/h3";
import { Button } from "../ui/button";

const PostCard = () => {
  const form = useForm<PostFormSchema>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      userid: "00001",
      username: "User1",
    },
  });

  function onSubmit(values: PostFormSchema) {
    console.log(values);
  }
  return (
    <div className="p-2 bg-primary-foreground rounded-lg space-y-3">
      <H3>Post as {"User 1"}</H3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea placeholder="What's popping today" {...field} />
                </FormControl>
              </FormItem>
            )}
            
          />
          <Button className="bg-brand" variant="secondary">Post</Button>
        </form>
      </Form>
    </div>
  );
};

export default PostCard;
