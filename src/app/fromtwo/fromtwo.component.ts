import { Component, OnInit } from '@angular/core';
import { Hero, Myhero } from './hero';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-fromtwo',
  templateUrl: './fromtwo.component.html',
  styleUrls: ['./fromtwo.component.css']
})
export class FromtwoComponent implements OnInit {

  public myhero = new Hero(42, 'zq', '123', 'zq', 'zq');
  public myherotwo: Hero;
  // heroForm = new FormGroup ({
  //   name: new FormControl()
  // });
  //c创建formControl
  public name = new FormControl();//创建一个formcontrold实体类

  //创建一个formgroup
  public myformgroup = new FormGroup({
    age: new FormControl(),
  });
  //利用formbuild来进行form表单的构建
  //1.创建一个formgroup类
  public mytwoformgroup: FormGroup;
  namechangelog: string[] = [];
  constructor(
    public fb: FormBuilder //2.创建formbuild（有formControl这个类）
  ) {
    //3构建formgroup
    //4 在处理这些东西之后我们在加入一些验证
    this.mytwoformgroup = this.fb.group({
      name: [this.myhero.name],//这是一个formControl类叫做name
      divs: [this.myhero.divs, Validators.required],
      id: [this.myhero.id],
      power: [this.myhero.power]
    });
    this.logdivsChages();

  }
  //打印divs的日志
  logdivsChages() {
    const divscontrol = this.mytwoformgroup.get('divs');
    divscontrol.valueChanges.forEach(
      (value: string) => this.namechangelog.push(value)
    )
  }
  public option: any
  ngOnInit() {
    this.option = {
      language: "zh_cn", //配置语言
      placeholderText: "请输入内容", // 文本框提示内容
      charCounterCount: true, // 是否开启统计字数
      charCounterMax: 200000, // 最大输入字数,目前只支持英文字母
      // 注意导航条的配置, 按照官方的文档,无法配置,只能使用toolbarButtons来配置了。
      toolbarButtons: ['fullscreen', '|', 'bold', 'italic', 'underline', 'strikeThrough', 'align', 'insertLink', 'insertImage', 'insertHR', 'subscript', 'superscript'],
      codeMirror: false, // 高亮显示html代码
      codeMirrorOptions: { // 配置html代码参数
        tabSize: 4
      },
      imageUploadURL: 'http://42.159.144.219:8383/richimg',
      imageUploadParam: "upload",
      events: {
        'froalaEditor.focus': function (e, editor) {
          // console.log(editor.selection.get());
        },
        'froalaEditor.image.beforeUpload': function (e, editor, images) {
          console.log(1111);
          console.log(editor);
        },
        'froalaEditor.image.uploaded': function (e, editor, response) {
          console.log(response);//上传成功之后返回给我的值
        },
        'froalaEditor.image.inserted': function (e, editor, $img, response) {
          console.log($img);
          console.log(response);
        }
      }
      // 事件, 每次输入,就将值传递给父组件, 或者使用失去焦点的时候传递。
      // events: {
      //   'froalaEditor.keyup': function (e, editor) {
      //     that.froala.emit(that.froalaText);
      //     console.log(editor.selection.get());
      //   }
      // }
    }
  }
  public onSubmit() {
    console.log(this.mytwoformgroup.value);
    console.log(Object.assign(this.myhero, this.mytwoformgroup.value));
    console.log(this.myhero);
  }
}
